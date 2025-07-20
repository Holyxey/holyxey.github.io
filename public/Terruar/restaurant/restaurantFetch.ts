export type Product = {
  title: string;
  descr: string;
  price: number;
  photoList: string[];
  category: string;
  weight?: number;
  specs?: Record<string, string>;
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

export async function getProductsByType(): Promise<Product[]> {
  const link: string =
    'https://store.tildaaapi.com/api/getproductslist/?storepartuid=513452425241&recid=752306605&c=1716436482010&getparts=true&getoptions=true&slice=1&size=36&projectid=5131025';

  let restaurantData;

  try {
    const respopnse = await fetch(link);
    restaurantData = await respopnse.json();
  } catch (e) {
    // return example || [];
    return [];
  }

  // Преобразуем каждый продукт из example.products в объект типа Product
  return restaurantData.products.map((product: any) => {
    return {
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
        const part = restaurantData.parts.find((p) => partuids.includes(p.uid));
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
  });
}

//
// export const example: Product[] = [
//   {
//     title: 'Блины с сыром и ветчиной',
//     descr:
//       'Молоко, мука пшеничная, сыр полутвердый, соль, ветчина, яйцепродукты, масло подсолнечное, сахар, зелень, сливки, соль.',
//     price: 180,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3834-3563-4732-a536-663537343462/-/format/webp/72297990.png.webp',
//     ],
//     category: 'Завтраки',
//     weight: 150,
//     specs: {
//       Калории: '240',
//       Жиры: '11',
//       Белки: '12',
//       Углеводы: '22',
//     },
//   },
//   {
//     title: 'Блины с яблоком и корицей',
//     descr:
//       'Мука, молоко, яичный меланж, сахар, яблоко, масло подсолнечное, масло сливочное',
//     price: 151,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3161-6639-4739-b164-323563633738/-/format/webp/52923288.png.webp',
//     ],
//     category: 'Завтраки',
//     weight: 250,
//     specs: {
//       Калории: '260',
//       Жиры: '16',
//       Белки: '8',
//       Углеводы: '21',
//     },
//   },
//   {
//     title: 'Борщ с телятиной без сметаны',
//     descr:
//       'Говядина, капуста, картофель, лук, свекла, морковь, томатная паста, перец сладкий масло подсолнечное, специи',
//     price: 172,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3132-3261-4862-a534-353938376637/-/format/webp/18894473.png.webp',
//     ],
//     category: 'Первые блюда',
//     weight: 300,
//     specs: {
//       Калории: '60',
//       Жиры: '3',
//       Белки: '3',
//       Углеводы: '5,5',
//     },
//   },
//   {
//     title: 'Каша рисовая с яблоком',
//     descr:
//       'Молоко, крупа рисовая, яблоки сушеные, сахар, маслосливочное, соль, крахмал картофельный.',
//     price: 117,
//     photoList: [
//       'https://thumb.tildacdn.com/stor6231-3966-4535-b063-383536356134/-/format/webp/19981322.png.webp',
//     ],
//     category: 'Завтраки',
//     weight: 250,
//     specs: {
//       Калории: '110',
//       Жиры: '3',
//       Белки: '1,5',
//       Углеводы: '18',
//     },
//   },
//   {
//     title: 'Куриные котлеты с пюре и сырным соусом',
//     descr:
//       'Картофельное пюре, молоко, соль. Мясо птицы, лук репчатый, масло подсолнечное, сухари, яйца, специи, соус (сыр, сливки, мука)',
//     price: 223,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3938-6232-4537-b235-616137626562/-/format/webp/20318009.png.webp',
//     ],
//     category: 'Горячие блюда',
//     weight: 260,
//     specs: {
//       Калории: '190',
//       Жиры: '12',
//       Белки: '10',
//       Углеводы: '11',
//     },
//   },
//   {
//     title: 'Куриный суп-лапша',
//     descr:
//       'Мясо птицы, макароны, морковь, лук, масло подсолнечное, зелень, специи',
//     price: 113,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3563-3363-4965-a665-613435353134/-/format/webp/45233046.png.webp',
//     ],
//     category: 'Первые блюда',
//     weight: 300,
//     specs: {
//       Калории: '69',
//       Жиры: '2,5',
//       Белки: '2,5',
//       Углеводы: '6,5',
//     },
//   },
//   {
//     title: 'Кюфта из баранины с картофелем',
//     descr:
//       'Кюфта (говядина, лук, баранина, сухари панировочные, меланж яичный, орехгрецкий, масло подсолнечное, соль, чеснок, перец, орех мускатный), картофель, томаты в заливке, вода, перец сладкий, лук, крахмал картофельный, сахар, смесь специй "Аджика", сельдерей',
//     price: 271,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3466-6163-4265-a136-646162306666/-/format/webp/54067032.png.webp',
//     ],
//     category: 'Первые блюда',
//     weight: 271,
//     specs: {
//       Калории: '247',
//       Жиры: '15',
//       Белки: '20',
//       Углеводы: '12',
//     },
//   },
//   {
//     title: 'Панкейк с шоколадно-банановым соусом',
//     descr:
//       'Молоко, мука, масло растительное, бананы, шоколад темный, сахар, яичный меланж, соль, пищевая сода.',
//     price: 138,
//     photoList: [
//       'https://thumb.tildacdn.com/stor6538-6533-4065-b238-633832313530/-/format/webp/43544010.png.webp',
//     ],
//     category: 'Десерты',
//     weight: 150,
//     specs: {
//       Калории: '210',
//       Белки: '7',
//       Жиры: '12',
//       Углеводы: '18',
//     },
//   },
//   {
//     title: 'Паста с морепродуктами',
//     descr:
//       'Макароны, кальмары, томаты, креветки, сливки питьевые, масло подсолнечное, сыр полутвердый, мука пшеничная, масло сливочное, зелень, специи.',
//     price: 314,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3734-6238-4762-b931-663337646336/-/format/webp/57422108.png.webp',
//     ],
//     category: 'Горячие блюда',
//     weight: 260,
//     specs: {
//       Калории: '130',
//       Белки: '9',
//       Жиры: '3',
//       Углеводы: '16',
//     },
//   },
//   {
//     title: 'Скрембл с цыпленком и грибами',
//     descr:
//       'Меланж яичный, яичный желток, мясо муриное, шампиньоны, молоко, сливки питьевые, масло сливочное, сыр моцарелла, специи',
//     price: 175,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3430-3865-4262-b636-383233303437/-/format/webp/62995171.png.webp',
//     ],
//     category: 'Завтраки',
//     weight: 150,
//     specs: {
//       Калории: '220',
//       Белки: '12',
//       Жиры: '17',
//       Углеводы: '2',
//     },
//   },
//   {
//     title: 'Спагетти Карбонара с копченым цыпленком',
//     descr:
//       'Молоко, макароны, мясо куриное, сыр пармезан, лук репчатый, сыр моцарелла, яйца, масло подсолнечное, мука пшеничная, масло сливочное, соль',
//     price: 210,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3838-3035-4039-b163-343331306134/-/format/webp/85053857.png.webp',
//     ],
//     category: 'Горячие блюда',
//     weight: 230,
//     specs: {
//       Калории: '210',
//       Жиры: '11',
//       Белки: '9',
//       Углеводы: '16',
//     },
//   },
//   {
//     title: 'Сырники с малиновым вареньем',
//     descr:
//       'Творог, яичный меланж, мука, крупа манная, сахар, соль, масло подсолнечное, соус ягодный (малина, сахар, натуральный загуститель)',
//     price: 172,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3063-6430-4965-a130-636565313366/-/format/webp/95594882.png.webp',
//     ],
//     category: 'Завтраки',
//     weight: 180,
//     specs: {
//       Калории: '280',
//       Жиры: '17',
//       Белки: '12',
//       Углеводы: '2',
//     },
//   },
//   {
//     title: 'Уха Скандинавская',
//     descr:
//       'Рыба минтай, молоко, рыба лососевых пород, картофель, томаты , лук, сливки перец сладкий, масло подсолнечное, масло сливочное, мука, морковь, зелень.',
//     price: 211,
//     photoList: [
//       'https://thumb.tildacdn.com/stor6331-6166-4137-b832-666464366337/-/format/webp/73599619.png.webp',
//     ],
//     category: 'Первые блюда',
//     weight: 300,
//     specs: {
//       Калории: '145',
//       Жиры: '10',
//       Белки: '8',
//       Углеводы: '5,5',
//     },
//   },
//   {
//     title: 'Фрикадельки с рисом и соусом Черный перец',
//     descr: '',
//     price: 198,
//     photoList: [
//       'https://thumb.tildacdn.com/stor3134-6238-4834-a535-376636393961/-/format/webp/14528953.png.webp',
//     ],
//     category: 'Неизвестная категория',
//     specs: {},
//   },
//   {
//     title: 'Шоколадный брауни',
//     descr:
//       'Сахар, масло сливочное, яичный меланж, сливки, какао, шоколад, мука миндальная, сироп, соль, соус маракуйя.',
//     price: 221,
//     photoList: [
//       'https://thumb.tildacdn.com/stor6561-3465-4135-b738-626131643734/-/format/webp/57566551.png.webp',
//     ],
//     category: 'Десерты',
//     weight: 120,
//     specs: {
//       Калории: '510',
//       Белки: '8,5',
//       Жиры: '7',
//       Углеводы: '18,5',
//     },
//   },
// ];
