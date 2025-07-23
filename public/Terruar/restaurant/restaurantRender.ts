import {
  getCategoriesWithProducts,
  type Product,
  type Category,
} from './restaurantFetch';
import { PopUp } from '../_new/ui/popUp/popUp';
import './restaurantStyles.css';

const WAIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22"/><path d="m8.588 12.377l.871-1.081c.367-.456.82-.88.857-1.488c.008-.153-.1-.841-.315-2.218C9.916 7.049 9.41 7 8.973 7c-.57 0-.855 0-1.138.13c-.358.163-.725.622-.806 1.007c-.064.305-.016.515.079.935c.402 1.783 1.347 3.544 2.811 5.009c1.465 1.464 3.226 2.409 5.01 2.811c.42.095.629.143.934.079c.385-.08.844-.448 1.008-.806c.129-.283.129-.568.129-1.138c0-.438-.049-.943-.59-1.028c-1.377-.216-2.065-.323-2.218-.315c-.607.036-1.032.49-1.488.857l-1.081.87"/></g></svg>';

//
function getProductElement(prod: Product, index: number): HTMLDivElement {
  const proDiv = document.createElement('div');
  proDiv.className = 'product';

  proDiv.style.animationDelay = `${index * 0.05}s`;

  proDiv.innerHTML = /* html */ `
    <div class="product-header">
      <img src="${prod.photoList[0]}" 
        loading="lazy" referrerpolicy="no-referrer"
        alt="${prod.title}"
        crossorigin="anonymous" />
    </div>
    <div class="product-info">
      <p class="product-title"> ${prod.title} </p>
      <p class="product-descr"> ${prod.descr} </p>
    </div>
    <div class="product-footer">
      <a href="https://wa.me/79670655655?text=Здравствуйте! Я хочу заказать ${prod.title}" target="_blank" rel="noopener noreferrer"> 
        <span>Заказать</span> ${WAIcon}</a>
      <p class="product-price"> ${prod.price} ₽ </p>
    </div>
  `;

  return proDiv;
}
async function insertProducts(): Promise<HTMLDivElement> {
  const cat = document.createElement('div');
  cat.classList.add('catalogue');

  const categories = await getCategoriesWithProducts();

  categories.forEach((category) => {
    if (category.products.length === 0) return;
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    const categoryTitle = document.createElement('div');
    categoryTitle.textContent = category.title;
    categoryTitle.classList.add('cat-title');

    categoryDiv.appendChild(categoryTitle);

    console.log(category);

    category.products.forEach((prod, index) => {
      const productElement = getProductElement(prod, index);
      categoryDiv.appendChild(productElement);
    });

    cat.appendChild(categoryDiv);
  });

  return cat;
}

//
async function initCatalogue() {
  const catalogue = await insertProducts();
  const cataloguePopUp = new PopUp('Готовая еда в глэмпинге', catalogue);

  const searchParams = new URLSearchParams(location.search);
  const isUrlHasAction = searchParams.has('open-rest');

  const restButtons = document.querySelectorAll(
    '[data-action="open-restaurant-menu"]'
  );
  if (restButtons.length) {
    restButtons.forEach((button) => {
      button.addEventListener('click', () => cataloguePopUp.open());
    });
  }

  if (isUrlHasAction) {
    cataloguePopUp.open();
  }
}
window.addEventListener('load', initCatalogue);
