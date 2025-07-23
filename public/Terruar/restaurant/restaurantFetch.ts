export type Product = {
  title: string;
  descr: string;
  price: number;
  photoList: string[];
  category: string;
  weight?: number;
  specs?: Record<string, string>;
};

export type Category = {
  uid: string | number;
  title: string;
  sort: number;
  products: Product[];
};

function createOptimLink(link: string): string {
  const baseUrl = link
    .split('/')
    .slice(0, -1)
    .join('/')
    .replace('static', 'thumb');
  const fileName = link.split('/').pop();
  return `${baseUrl}/-/format/webp/${fileName}.webp`;
}

export async function getCategoriesWithProducts(): Promise<Category[]> {
  const link: string =
    'https://store.tildaapi.com/api/getproductslist/?storepartuid=513452425241&recid=752306605&c=1716436482010&getparts=true&getoptions=true&slice=1&size=36&projectid=5131025';

  let restaurantData;

  try {
    const respopnse = await fetch(link);
    restaurantData = await respopnse.json();
  } catch (e) {
    // return _exampleCategories || [];
    return [];
  }

  // Сначала создаем категории из parts, отсортированные по sort
  const categories: Category[] = restaurantData.parts
    .sort((a: any, b: any) => a.sort - b.sort)
    .map((part: any) => ({
      uid: part.uid,
      title: part.title,
      sort: part.sort,
      products: [],
    }));

  // Затем добавляем товары в соответствующие категории
  restaurantData.products.forEach((product: any) => {
    const productData: Product = {
      title: product.title || '', // Название продукта
      descr: product.descr || '', // Описание продукта
      price: parseFloat(product.price) || 0, // Цена продукта
      photoList: (() => {
        try {
          // Парсим галерею изображений, если она существует
          const gallery = JSON.parse(product.gallery || '[]');
          return Array.isArray(gallery)
            ? gallery.map((el) => createOptimLink(el.img)) // Преобразуем ссылки на изображения
            : [];
        } catch {
          return [];
        }
      })(),
      category: (() => {
        // Определяем категорию продукта на основе partuids
        const partuids = JSON.parse(product.partuids || '[]');
        const part = restaurantData.parts.find((p: any) =>
          partuids.includes(p.uid)
        );
        return part ? part.title : 'Неизвестная категория';
      })(),
      weight: product.pack_m || undefined, // Вес продукта, если указан
      specs: (() => {
        // Преобразуем характеристики продукта в объект
        if (
          !product.characteristics ||
          !Array.isArray(product.characteristics)
        ) {
          return undefined;
        }
        return product.characteristics.reduce(
          (acc: Record<string, string>, char: any) => {
            acc[char.title] = char.value;
            return acc;
          },
          {}
        );
      })(),
    };

    // Находим категорию для этого товара
    const partuids = JSON.parse(product.partuids || '[]');
    const category = categories.find((cat) => partuids.includes(cat.uid));

    if (category) {
      category.products.push(productData);
    }
  });

  console.log('Категории с продуктами:', categories);
  return categories;
}
