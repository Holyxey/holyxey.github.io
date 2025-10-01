const videoPath = 'https://holyxey.github.io/public/Terruar/media/terruar.mp4';

const node = document.getElementById('heroImageBlock') as HTMLDivElement;
const isDesktop = window.innerWidth > 500;

// Вставляю видео
function insertVideo(): HTMLVideoElement {
  try {
    const video = document.createElement('video');
    if (isDesktop) {
      video.autoplay = true;
    }
    video.muted = true;
    video.loop = true;
    video.volume = 0;

    video.style.width = '100%';
    video.style.maxWidth = '100%';
    video.style.position = 'absolute';
    video.style.top = '50%';
    video.style.left = '50%';
    video.style.transform = 'translate(-50%, -50%)';

    video.style.all = 'fitler 1s ease-in-out';
    video.style.zIndex = '1';

    if (document.readyState === 'complete') {
      video.src = videoPath;
      node.appendChild(video);
    } else {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          video.src = videoPath;
          video.addEventListener('canplaythrough', () =>
            node.appendChild(video)
          );
        }
      };
    }

    video.addEventListener('error', (e) => {
      console.error('Error loading video:', e);
    });

    return video;
  } catch (error) {
    console.warn('No heroImageBlock found, skipping video placement');
    throw new Error('No heroImageBlock found');
  }
}

// Элементы управления видео
function createButtonTemplate() {
  const button = document.createElement('button');
  button.style.zIndex = '2';
  button.style.position = 'absolute';
  button.style.width = '40px';
  button.style.height = '40px';
  button.style.border = 'none';
  button.style.background = 'var(--holyxey-yellow)';
  button.style.borderRadius = '50%';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.cursor = 'pointer';
  button.style.transition = 'all 0.3s ease-in-out';

  if (isDesktop) {
    button.style.opacity = '0';
    button.style.translate = '20px 20px';
  }

  function toggle(set: 'show' | 'hide') {
    if (set === 'show') {
      button.style.opacity = '1';
      button.style.translate = '0';
      button.style.scale = '1';
    } else {
      button.style.opacity = '0';
      button.style.translate = '20px 20px';
      button.style.scale = '0.8';
    }
  }

  return { button, toggle };
}
function insertPlayButton() {
  const { button, toggle } = createButtonTemplate();
  button.style.bottom = '20px';
  button.style.right = '20px';

  const icon = document.createElement('img');

  if (isDesktop) icon.src = iconLinks.nav.pause;
  else icon.src = iconLinks.nav.play;

  function setIcon(set: 'play' | 'pause') {
    if (set === 'play') {
      icon.src = iconLinks.nav.play;
    } else {
      icon.src = iconLinks.nav.pause;
    }
  }

  button.appendChild(icon);
  node.appendChild(button);
  return { button, setIcon, toggle };
}
function insertFullScreenButton() {
  const { button, toggle } = createButtonTemplate();
  button.style.bottom = '80px';
  button.style.right = '20px';
  button.style.transitionDelay = '0.05s';

  const icon = document.createElement('img');
  icon.src = iconLinks.nav.fullScreen;

  button.appendChild(icon);
  node.appendChild(button);
  return { button, toggle };
}

function controlElements(video: HTMLVideoElement) {
  const controls = {
    togglePlay: () => {
      if (video.paused) {
        video.play();
        play.setIcon('pause');
      } else {
        video.pause();
        play.setIcon('play');
      }
    },
    openFullScreen: () => {
      video.requestFullscreen({ navigationUI: 'show' });
      video.play();
      video.controls = true;
      video.volume = 1;
      video.muted = false;
    },
  };

  //
  const play = insertPlayButton();
  const fullScreen = insertFullScreenButton();

  //
  fullScreen.button.addEventListener('click', controls.openFullScreen);
  play.button.addEventListener('click', controls.togglePlay);

  //
  node.addEventListener('mouseenter', () => {
    play.toggle('show');
    fullScreen.toggle('show');
  });
  node.addEventListener('mouseleave', () => {
    play.toggle('hide');
    fullScreen.toggle('hide');
  });

  //
  return { play, fullScreen };
}

// Запуск
function main() {
  if (!node) return false;
  const video = insertVideo();
  controlElements(video);
}
main();
