  const tariffs = [
    {
      name: "Нейро-код",
      descr: ["30 июня — 11 июля"],
      list: [
        "Как устроен компьютер и что у него под капотом",
        "Программирование на Python: переменные, условия, первые алгоритмы",
        "Работа с ChatGPT: как правильно давать задания ИИ",
        "Проект: Игра, сайт или программа созданная с помощью GPT",
      ],
      link: "#popup:campus_2025_popup",
      link_text: "Записаться",
    },
    {
      name: "Кибер-смена",
      descr: ["28 июля — 8 августа"],
      list: [
        "Что такое киберспорт и как туда попадают",
        "Основы командной игры: стратегия, роли, взаимодействие",
        "Практика: турниры по Dota 2 или CS2, тренировки, тимплей",
        "Живые матчи: играем против друг друга и команды кибер-команда ITHub",
      ],
      link: "#popup:campus_2025_popup",
      link_text: "Записаться",
    },
    {
      name: "Нейро-дизайн",
      descr: ["11 августа — 22 августа"],
      list: [
        "Учимся создавать изображения и идеи с помощью ИИ-инструментов",
        "Основы графики, веб-дизайна, моушена и иллюстрации",
        "Работа с промптами и редактирование ИИ-контента",
        "Создаем реальный проект: от концепции до презентации",
      ],
      link: "#popup:campus_2025_popup",
      link_text: "Записаться",
    },
  ];
  const together = [
    {
      name: "Пакет 2 смены на выбор",
      descr: ["52.350 руб."],
      list: [
        "Нейро-код + нейро-дизайн,",
        "Нейро-код + кибер-смена,",
        "Нейро-дизайн + кибер-смена",
        "Стоимость одной программы — 26.175 руб. вместо 30.900 руб.",
      ],
      link: "#popup:campus_2025_popup",
      link_text: "Оставить заявку",
    },
    {
      name: "Провести всё лето в кампусе IThub! ",
      descr: ["74.160 руб."],
      list: [
        "+ Нейро-код",
        "+ Нейро-дизайн",
        "+ Кибер-смена",
        "Стоимость одной программы — 24.720 руб. вместо 30.900 руб."
      ],
      link: "#popup:campus_2025_popup",
      link_text: "Оставить заявку",
    },
    {
      name: "Отправляйтесь в IThub с друзьями!",
      descr: ["Для друзей, братьев, сестёр"],
      list: [
        "При покупке одной программы для разных ребят",
        "Действует дополнительная скидка",
        "Подробнее расскажет наш менеджер",
      ],
      link: "#popup:campus_2025_popup",
      link_text: "Оставить заявку",
    },
  ];

  function renderCards(id, list) {
    const node = document.getElementById(id);
    if (!node) return;

    node.classList.add("at_varCards");

    list.forEach((v, i) => {
      const card = document.createElement("div");
      card.className = "at_varCard";

      card.innerHTML = `
          <div class="at_varCard__header">
            <p class="at_varCard__name">${v.name}</p>
            ${v.descr.map((p) => `<p class="at_varCard__date">${p.trim()}</p>`).join("")}
          </div>
          
          <div class="at_varCard__list">
            ${v.list .map( (item) =>
                  `<p>
                    <span class="at_star">✦</span>
                    ${item.trim()}</p>
                  `
              )
              .join("")}
          </div>
          
          <a href="${v.link}">
            ${v.link_text}
          </a>
          `;

      node.appendChild(card);

      card.addEventListener("click", () => {
        const popup = card.querySelector("a");
        if (popup) {
          popup.click();
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCards('variant_campus_2025', tariffs);
    renderCards('together_campus_2025', together);
  });