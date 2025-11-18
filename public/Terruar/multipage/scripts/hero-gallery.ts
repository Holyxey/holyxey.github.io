let node = document.getElementById('heroImageBlock') as HTMLDivElement;
const list: string[] = [
  'https://static.tildacdn.com/tild6432-3230-4264-a539-363737336335/ny-1.jpg',
  'https://static.tildacdn.com/tild6438-6361-4133-b064-646366383832/ny-2.jpg',
  'https://static.tildacdn.com/tild3739-3232-4561-a266-626266356635/ny-3.jpg',
  'https://static.tildacdn.com/tild3739-3333-4132-b661-643730633566/ny-4.jpg',
  'https://static.tildacdn.com/tild3334-6665-4162-b332-303439396263/ny-5.png',
  'https://static.tildacdn.com/tild3732-6234-4431-a635-373334393431/ny-6.jpg',
  'https://static.tildacdn.com/tild3235-3135-4161-b230-376566356239/ny-7.jpg',
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
