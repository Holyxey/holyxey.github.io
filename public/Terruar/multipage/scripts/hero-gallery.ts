let node = document.getElementById('heroImageBlock') as HTMLDivElement;
const list: string[] = [
  'https://avatars.mds.yandex.net/get-altay/12814440/2a00000191938365af85965694d05077332e/XXXL',
  'https://avatars.mds.yandex.net/get-altay/10578166/2a0000018deab5fb1c821d41e48183fd7743/XXXL',
  'https://avatars.mds.yandex.net/get-altay/16182900/2a00000196a479884aff6283a79dc47a8eb7/XXXL',
  'https://avatars.mds.yandex.net/get-altay/901763/2a00000184a88d3638cddbf4368d73af99a7/XXXL',
  'https://static.tildacdn.com/tild3734-3931-4465-a133-613035393531/quadbike.png',
  'https://avatars.mds.yandex.net/get-altay/11371852/2a0000018d2bafa21415d5a529249126feb0/XXXL',
  'https://avatars.mds.yandex.net/get-altay/903559/2a0000018719338a4e7991a8d56261679868/XXXL',
];
const IDS = {
  WRAPPER: 'heroImageBlockWrapper',
  NEXT_ARROW: 'heroGalleryNextArrow',
  PREV_ARROW: 'heroGalleryPrevArrow',
};

// State
let mobile = false;

// Arrow creation
function createArrow(is: 'prev' | 'next'): HTMLDivElement {
  const srcs = {
    next: 'https://api.iconify.design/solar:arrow-right-bold-duotone.svg?color=%23f8f3c8',
    prev: 'https://api.iconify.design/solar:arrow-left-bold-duotone.svg?color=%23f8f3c8',
  };

  const wrapper = document.createElement('div');
  const arrow = document.createElement('img');

  arrow.src = srcs[is];
  arrow.width = 20;
  arrow.style.margin = 'auto';
  arrow.style.userSelect = 'none';
  arrow.style.pointerEvents = 'none';

  wrapper.id = is === 'next' ? IDS.NEXT_ARROW : IDS.PREV_ARROW;
  wrapper.style.background = 'var(--holyxey-back-img) var(--holyxey-back)';
  wrapper.style.aspectRatio = '1 / 1';
  wrapper.style.width = '40px';
  wrapper.style.height = '50px';
  wrapper.style.display = 'flex';
  wrapper.style.cursor = 'pointer';
  wrapper.style.boxShadow = '0 0 10px 2px var(--holyxey-yellow)';
  wrapper.style.bottom = '100px';
  wrapper.style.position = 'absolute';
  wrapper.style.borderRadius =
    is === 'next' ? '20px 0 0 20px' : '0 20px 20px 0';

  switch (is) {
    case 'next':
      wrapper.style.right = '-1px';
      break;
    case 'prev':
      wrapper.style.left = '-1px';
      break;
  }

  wrapper.appendChild(arrow);
  return wrapper;
}

// Gallery wrapper logic
async function preloadImages() {
  await Promise.all(
    list.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
        })
    )
  );
}
function insertImage(url: string, wrapper: HTMLDivElement) {
  const img = document.createElement('img');
  img.alt =
    'Новый год в Terruar. Глэмпинг Терруар под Москвой в Тульской области';
  img.src = url;
  img.style.width = node.clientWidth + 'px';
  img.style.height = node.clientHeight + 'px';
  img.style.minHeight = '100%';
  img.style.borderRadius = '30px';
  img.style.objectFit = 'cover';
  img.style.display = 'block';
  img.style.scrollSnapAlign = 'center';

  wrapper.appendChild(img);
}
async function initImages(): Promise<HTMLDivElement> {
  await preloadImages();

  const wrapper = document.createElement('div');
  wrapper.id = IDS.WRAPPER;
  wrapper.classList.add('no-scrollbar');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '10px';
  wrapper.style.width = '100%';
  wrapper.style.height = '100%';
  wrapper.style.minHeight = '300px';
  wrapper.style.position = 'relative';
  wrapper.style.overflowX = 'auto';
  wrapper.style.display = 'flex';
  wrapper.style.scrollSnapType = 'x mandatory';
  wrapper.style.scrollBehavior = 'smooth';

  //
  list.forEach((url) => {
    insertImage(url, wrapper);
  });

  return wrapper;
}

// Main
async function initHeroGallery() {
  try {
    if (window.innerWidth < 1000) {
      const mobWrapper = document.createElement('div');
      mobWrapper.style.width = '100%';
      mobWrapper.style.height = '300px';
      document.querySelector('main')?.prepend(mobWrapper);

      mobile = true;
      node = mobWrapper;
    }
    // Arrows insert
    const wrapper = await initImages();
    const nextArrow = createArrow('next');
    const prevArrow = createArrow('prev');
    node.appendChild(nextArrow);
    node.appendChild(prevArrow);

    node.style.background = '';
    node.style.backgroundImage = 'none';

    node.prepend(wrapper);
    window.initHolyGallery?.(IDS.WRAPPER, IDS.NEXT_ARROW, IDS.PREV_ARROW);
  } catch (error) {
    console.error('Error initializing hero gallery:', error);
  }
}

window.addEventListener('load', async () => {
  await initHeroGallery();
});
