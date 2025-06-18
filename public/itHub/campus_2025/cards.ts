type Card = {
  img?: string;
  name: string;
  descr: string[];
  list: string[];
  links: {
    href: string;
    text: string;
  }[];
};

//
const tariffs: Record<string, Card> = {
  neuro_kod: {
    name: 'Нейро-код',
    img: 'https://optim.tildacdn.com/tild3266-6336-4137-a465-326363313539/-/format/webp/DSC00137-_resized.jpg.webp',
    descr: ['30 июня — 11 июля'],
    list: [
      'Как устроен компьютер и что у него под капотом',
      'Программирование на Python: переменные, условия, первые алгоритмы',
      'Работа с ChatGPT: как правильно давать задания ИИ',
      'Проект: Игра, сайт или программа созданная с помощью GPT',
    ],
    links: [
      {
        href: '#popup:campus_2025_popup',
        text: 'Записаться',
      },
    ],
  },
  cyber_smena: {
    name: 'Кибер-смена',
    img: 'https://optim.tildacdn.com/tild3237-6332-4966-b064-376335303530/-/format/webp/DSC00143-_resized.jpg.webp',
    descr: ['28 июля — 8 августа'],
    list: [
      'Что такое киберспорт и как туда попадают',
      'Основы командной игры: стратегия, роли, взаимодействие',
      'Практика: турниры по Dota 2 или CS2, тренировки, тимплей',
      'Живые матчи: играем против друг друга и команды кибер-команда ITHub',
    ],
    links: [
      {
        href: '#popup:campus_2025_popup',
        text: 'Записаться',
      },
    ],
  },
  neuro_design: {
    name: 'Нейро-дизайн',
    img: 'https://optim.tildacdn.com/tild3666-6336-4230-a463-326330363165/-/format/webp/DSCF2253_resized.jpg.webp',
    descr: ['11 августа — 22 августа'],
    list: [
      'Учимся создавать изображения и идеи с помощью ИИ-инструментов',
      'Основы графики, веб-дизайна, моушена и иллюстрации',
      'Работа с промптами и редактирование ИИ-контента',
      'Создаем реальный проект: от концепции до презентации',
    ],
    links: [
      {
        href: '#popup:campus_2025_popup',
        text: 'Записаться',
      },
      {
        href: `#order:IThub-лагерь. Программа "Нейро дизайн" 2025=30900:::image=https://optim.tildacdn.com/tild3666-6336-4230-a463-326330363165/-/format/webp/DSCF2253_resized.jpg.webp`,
        text: 'Оплатить',
      },
    ],
  },
};
const together: Record<string, Card> = {
  two_pack: {
    name: 'Пакет 2 смены на выбор',
    descr: ['52.350 руб.'],
    list: [
      'Нейро-код + нейро-дизайн,',
      'Нейро-код + кибер-смена,',
      'Нейро-дизайн + кибер-смена',
      'Стоимость одной программы — 26.175 руб. вместо 30.900 руб.',
    ],
    links: [
      {
        href: '#popup:campus_2025_popup',
        text: 'Оставить заявку',
      },
    ],
  },
  full_summer: {
    name: 'Провести всё лето в кампусе IThub! ',
    descr: ['74.160 руб.'],
    list: [
      '+ Нейро-код',
      '+ Нейро-дизайн',
      '+ Кибер-смена',
      'Стоимость одной программы — 24.720 руб. вместо 30.900 руб.',
    ],
    links: [
      {
        href: '#popup:campus_2025_popup',
        text: 'Оставить заявку',
      },
    ],
  },
  with_friends: {
    name: 'Отправляйтесь в IThub с друзьями!',
    descr: ['Для друзей, братьев, сестёр'],
    list: [
      'При покупке одной программы для разных ребят',
      'Действует дополнительная скидка',
      'Подробнее расскажет наш менеджер',
    ],
    links: [
      {
        href: '#popup:campus_2025_popup',
        text: 'Оставить заявку',
      },
    ],
  },
};

//
function renderCard(id: string, item: Card) {
  const node = document.getElementById(id);
  if (!node) return;

  node.classList.add('at_varCards');

  const card = document.createElement('div');
  card.className = 'at_varCard';

  card.innerHTML = `
            <div class="at_varCard__header">
              <p class="at_varCard__name">${item.name}</p>
              ${item.descr
                .map((p) => `<p class="at_varCard__date">${p.trim()}</p>`)
                .join('')}
            </div>
            
            <div class="at_varCard__list">
              ${item.list
                .map(
                  (item) =>
                    `<p>
                      <span class="at_star">✦</span>
                      ${item.trim()}</p>
                    `
                )
                .join('')}
            </div>

            ${item.links
              .map(
                (link) => `<a href="${link.href}">
                ${link.text}
              </a>`
              )
              .join('')}

          `;

  node.appendChild(card);

  card.addEventListener('click', () => {
    const popup = card.querySelector('a');
    if (popup) {
      popup.click();
    }
  });
}
function renderBigCard(id: string, item: Card) {
  const insert = document.getElementById(id);
  if (!insert || !item.img) return;

  //
  insert.innerHTML = `
    <div class="at_fullCard">
      <div class="at_fullCard__header"
        alt="IThub ${item.name} ${item.list[0]}" 
        style="background-image: url('${item.img}')">

        <h4 class="">${item.name}</h4>

        <div class="at_fullCard__descr">
          ${item.descr}
        </div>
      
      </div>

      <div class="at_fullCard__content">
        
        <div class="at_fullCard__list">
          ${item.list
            .map((p) => `<p class="at_fullCard__list_item">${p.trim()}</p>`)
            .join('')}
        </div>

        <div class="at_fullCard__buttons">
          ${item.links
            .map(
              (l) =>
                `<a href="${
                  l.href
                }" class="at_fullCard__button">${l.text.trim()}</a>`
            )
            .join('')}
        </div>
      </div>
    </div>
  `;
}

//
document.addEventListener('DOMContentLoaded', () => {
  renderBigCard('variant_campus_2025_neuro_design', tariffs['neuro_design']);
});
