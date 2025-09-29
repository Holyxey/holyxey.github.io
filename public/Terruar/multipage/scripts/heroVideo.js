const videoPath = 'https://holyxey.github.io/public/Terruar/media/terruar.mp4';

function placeVideo() {
  if (!document.body.getAttribute('hero-video')) return;
  try {
    const node = document.getElementById('heroImageBlock');
    if (!node) throw new Error('No node found');

    const video = document.createElement('video');
    video.src = videoPath;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    video.style.width = '100%';
    video.style.maxWidth = '100%';
    video.style.objectFit = 'cover';
    video.style.position = 'absolute';
    video.style.top = '50%';
    video.style.left = '50%';
    video.style.transform = 'translate(-50%, -50%)';

    video.style.all = 'fitler 1s ease-in-out';
    video.style.zIndex = '1';

    if (document.readyState === 'complete') node.appendChild(video);
    else video.addEventListener('loadeddata', node.appendChild(video));

    video.addEventListener('error', (e) => {
      console.error('Error loading video:', e);
    });
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  } catch (error) {
    console.warn('No heroImageBlock found, skipping video placement');
    return;
  }
}
placeVideo();
