function isRef() {
  const hasCookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('madeby-yurin='));

  const hasLocal = localStorage.getItem('madeby-yurin');
  const isQuery = window.location.search.includes('madeby-yurin');

  const referrers = [
    'fl.ru',
    'freelancer.ru',
    'youdo.ru',
    'youdo.com',
    'fiverr.com',
    'wellfound.com',
    'toptal.com',
    'upwork.com',

    'holyxey.com',
    'linkedin.com',
    'yurin.dev',
  ];
  const hasRef = referrers.some((r) => document.referrer.includes(r));

  return hasRef || hasCookie || hasLocal;
}

function setup() {
  const date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  document.cookie = `madeby-yurin=true; expires=${date.toUTCString()}; path=/`;

  localStorage.setItem('madeby-yurin', 'true');
}

function madeby() {
  setup();

  const link: HTMLAnchorElement | null =
    document.querySelector('a[id=madeby-yurin]');
  if (!link) return;

  const lang = window.navigator.language;
  const host = window.location.host.replace('www.', '').replaceAll('.', '-');

  link.href = `https://yurin.dev/?utm_source=${host}&utm_campaign=madeby`;
  lang && lang.startsWith('ru')
    ? (link.textContent = 'Дизайн и разработка © Yurin.dev')
    : (link.textContent = 'Design & Development © Yurin.dev');
}

if (isRef()) {
  if (document.readyState === 'complete') madeby();
  else window.addEventListener('load', madeby);
}
