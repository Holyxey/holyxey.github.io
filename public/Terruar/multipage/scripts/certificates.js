class Certificate {
  constructor({ img, alt, link }) {
    this.img = img;
    this.alt = alt;
    this.link = link;
  }

  render() {
    return `
      <a class="certificate" href="${this.link}" target="_blank" rel="noopener noreferrer">
        <p>Купить сертификат</p>
        <img src="${this.img}" alt="${this.alt}" class="certificate-img" />
      </a>
    `;
  }
}

function renderCertificates() {
  const node = document.querySelector('#certificates-block .certificates-list');
  if (!node) throw new Error('Нет блока для сертификатов');

  const list = lists.loyalty.find((i) => i.id === 'certificates')?.innards;
  if (!list) throw new Error('Не найдены списки');

  //

  for (const [key, value] of Object.entries(list)) {
    const obj = {
      img: value.imageLink || '',
      alt: value.imageAlt || `Сертификат Терруар на ${key}`,
      link: value.paymentLink || '',
    };
    const certificate = new Certificate(obj);
    node.insertAdjacentHTML('beforeend', certificate.render());
  }
}

document.addEventListener('DOMContentLoaded', function () {
  try {
    renderCertificates();
  } catch (error) {
    console.error('Сертификаты: \n', error.message || error);
  }
});
