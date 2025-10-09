function holyxey() {
  const addCommentHolyxey = document.createComment(
    'Дизайн, разработка: Holyxey.com'
  );
  document.prepend(addCommentHolyxey);
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
