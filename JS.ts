const holyxeySchema = () => {
  const schemaData = {
    path: window.location.origin,
    year: new Date().getFullYear().toString(),
  };
  const addSchemaWebSite = document.createElement('script');
  addSchemaWebSite.type = 'application/ld+json';
  addSchemaWebSite.innerHTML = `
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "${schemaData.path}",
        "copyrightYear": "${schemaData.year}",
        "author": {
          "@type": "Person",
          "email": "contact@yurin.dev",
          "url": "https://yurin.dev",
          "skills": "Fullstack developer & UI/UX Designer",
          "jobTitle": "Fullstack developer & UI/UX Designer",
          "name": "Alex Yurin",
          "additionalName": "holyxey",
          "image": "https://yurin.dev/meta/og.webp
        }
      }
    `;
  document.body.append(addSchemaWebSite);
};
function holyxey() {
  const lang = document.documentElement.lang.startsWith('ru') ? 'ru' : 'en';

  const styles =
    'background-color: #FEFBE8; color: #00272B; border: solid 1px #00272B; font-size: 10px; display: inline-block; padding: 2px 8px; border-radius: 8px';
  const comment = {
    ru: 'Дизайн, разработка: Алексей Юрин - https://yurin.dev',
    en: 'Design & Development: Alex Yurin - https://yurin.dev',
  };

  console.log(`%c${comment[lang]}`, styles);
  document.prepend(document.createComment(comment[lang]));
}

holyxey();
holyxeySchema();
