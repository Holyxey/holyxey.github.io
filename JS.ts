function holyxey() {
  const addCommentHolyxey = document.createComment(
    'Дизайн, разработка: Алексей Юрин'
  );
  document.prepend(addCommentHolyxey);

  const lang = document.documentElement.lang.startsWith('ru') ? 'ru' : 'en';

  const styles =
    'background-color: #FEFBE8; color: #00272B; border: solid 1px #00272B; font-size: 10px; display: inline-block; padding: 2px 8px; border-radius: 8px';

  if (lang === 'ru')
    console.log(
      '%cДизайн и разработка: Алексей Юрин - https://yurin.dev',
      styles
    );
  else
    console.log(
      '%cDesign & Development: Alex Yurin - https://yurin.dev',
      styles
    );
}
const holyxeySchema = () => {
  const schemaData = {
    path: window.location.origin,
    year: new Date().getFullYear().toString(),
  };
  const addSchemaWebSite = document.createElement('script');
  addSchemaWebSite.type = 'application/ld+json';
  addSchemaWebSite.innerHTML = /* js */ `
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "${schemaData.path}",
            "copyrightYear": "${schemaData.year}",
            "publisher": {
                "@type": "Organization",
                "brand": "AdsTarget",
                "legalName": "AdsTarget",
                "email": "mail@adstarget.ru",
                "image": "https://optim.tildacdn.com/tild6631-3263-4136-b435-396234613533/x300.png"
            },
            "author": {
                "@type": "Person",
                "email": "contact@yurin.dev",
                "url": "https://yurin.dev",
                "skills": "Fullstack developer & UI/UX Designer",
                "jobTitle": "Fullstack developer & UI/UX Designer",
                "name": "Alex Yurin",
                "additionalName": "holyxey"
            }
        }
    `;
  document.body.append(addSchemaWebSite);
};

holyxey();
holyxeySchema();
