function d(e) {
  let t = e.split('/').slice(0, -1).join('/').replace('static', 'thumb'),
    n = e.split('/').pop();
  return `${t}/-/format/webp/${n}.webp`;
}
async function a() {
  let e;
  try {
    e = await (
      await fetch(
        'https://store.tildaaapi.com/api/getproductslist/?storepartuid=513452425241&recid=752306605&c=1716436482010&getparts=true&getoptions=true&slice=1&size=36&projectid=5131025'
      )
    ).json();
  } catch (t) {
    return [];
  }
  return e.products.map((t) => {
    return {
      title: t.title || '',
      descr: t.descr || '',
      price: parseFloat(t.price) || 0,
      photoList: (() => {
        try {
          let n = JSON.parse(t.gallery || '[]');
          return Array.isArray(n) ? n.map((i) => d(i.img)) : [];
        } catch {
          return [];
        }
      })(),
      category: (() => {
        let n = JSON.parse(t.partuids || '[]'),
          i = e.parts.find((o) => n.includes(o.uid));
        return i ? i.title : 'Неизвестная категория';
      })(),
      weight: t.pack_m || void 0,
      specs: (() => {
        if (!t.characteristics || !Array.isArray(t.characteristics)) return;
        return t.characteristics.reduce((n, i) => {
          return (n[i.title] = i.value), n;
        }, {});
      })(),
    };
  });
}
class s {
  title;
  initialContent;
  container;
  contentElement;
  headerElement;
  titleElement;
  closeButton;
  isOpen = !1;
  constructor(e, t) {
    this.title = e;
    this.initialContent = t;
    (this.container = document.createElement('div')),
      this.container.classList.add('pop-up'),
      (this.contentElement = document.createElement('div')),
      (this.contentElement = t),
      this.contentElement.classList.add('pop-up-content'),
      (this.headerElement = document.createElement('div')),
      (this.headerElement.className = 'pop-up-header'),
      (this.closeButton = document.createElement('button')),
      (this.closeButton.textContent = 'Закрыть'),
      (this.titleElement = document.createElement('p')),
      (this.titleElement.className = 'pop-up-title'),
      (this.titleElement.textContent = this.title),
      this.headerElement.appendChild(this.titleElement),
      this.headerElement.appendChild(this.closeButton),
      this.container.appendChild(this.headerElement),
      this.container.appendChild(this.contentElement),
      this.closeButton.addEventListener('click', () => this.close());
  }
  open() {
    if (
      (document.addEventListener('keydown', this.handleKeyDown), !this.isOpen)
    )
      document.body.appendChild(this.container), (this.isOpen = !0);
  }
  close() {
    if (
      (document.removeEventListener('keydown', this.handleKeyDown), this.isOpen)
    )
      document.body.removeChild(this.container), (this.isOpen = !1);
  }
  setTitle(e) {
    (this.title = e), (this.titleElement.textContent = e);
  }
  setContent(e) {
    this.contentElement.replaceWith(e), (this.contentElement = e);
  }
  handleKeyDown = (e) => {
    if (e.key === 'Escape' && this.isOpen) this.close();
  };
}
var p =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22"/><path d="m8.588 12.377l.871-1.081c.367-.456.82-.88.857-1.488c.008-.153-.1-.841-.315-2.218C9.916 7.049 9.41 7 8.973 7c-.57 0-.855 0-1.138.13c-.358.163-.725.622-.806 1.007c-.064.305-.016.515.079.935c.402 1.783 1.347 3.544 2.811 5.009c1.465 1.464 3.226 2.409 5.01 2.811c.42.095.629.143.934.079c.385-.08.844-.448 1.008-.806c.129-.283.129-.568.129-1.138c0-.438-.049-.943-.59-1.028c-1.377-.216-2.065-.323-2.218-.315c-.607.036-1.032.49-1.488.857l-1.081.87"/></g></svg>';
function m(e, t) {
  let n = document.createElement('div');
  return (
    (n.className = 'product'),
    (n.style.animationDelay = `${t * 0.05}s`),
    (n.innerHTML = `
    <div class="product-header">
      <img src="${e.photoList[0]}" 
        loading="lazy" referrerpolicy="no-referrer"
        alt="${e.title}"
        crossorigin="anonymous" />
    </div>
    <div class="product-info">
      <p class="product-title"> ${e.title} </p>
      <p class="product-descr"> ${e.descr} </p>
    </div>
    <div class="product-footer">
      <a href="https://wa.me/79670655655?text=Здравствуйте! Я хочу заказать ${e.title}" target="_blank" rel="noopener noreferrer"> 
        <span>Заказать</span> ${p}</a>
      <p class="product-price"> ${e.price} ₽ </p>
    </div>
  `),
    n
  );
}
async function h() {
  let e = document.createElement('div');
  e.classList.add('catalogue');
  let t = await a(),
    n = new Map();
  return (
    t.forEach((i, o) => {
      if (!n.has(i.category)) {
        let r = document.createElement('div');
        r.classList.add('category');
        let l = document.createElement('div');
        (l.textContent = i.category),
          l.classList.add('cat-title'),
          r.appendChild(l),
          n.set(i.category, r),
          e.appendChild(r);
      }
      let c = m(i, o);
      n.get(i.category)?.appendChild(c);
    }),
    e
  );
}
async function u() {
  let e = await h(),
    t = new s('Наша еда', e),
    n = window.location.href.includes('open-rest=true'),
    i = document.querySelectorAll('button[data-action="open-restaurant-menu"]');
  if (i.length)
    i.forEach((o) => {
      o.addEventListener('click', () => t.open());
    });
  if (n) t.open();
}
window.addEventListener('load', u);
export { u as initCatalogue };
