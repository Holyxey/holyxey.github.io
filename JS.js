var o=()=>{let e={path:window.location.origin,year:new Date().getFullYear().toString()},t=document.createElement("script");t.type="application/ld+json",t.innerHTML=`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "${e.path}",
        "copyrightYear": "${e.year}",
        "author": {
          "@type": "Person",
          "email": "contact@yurin.dev",
          "url": "https://yurin.dev",
          "skills": "Fullstack developer & UI/UX Designer",
          "jobTitle": "Fullstack developer & UI/UX Designer",
          "name": "Alex Yurin",
          "additionalName": "holyxey",
          "image": "https://yurin.dev/meta/og.webp"
        }
      }
    `,document.body.append(t)};function r(){let e=document.documentElement.lang.startsWith("ru")?"ru":"en",t="background-color: #FEFBE8; color: #00272B; border: solid 1px #00272B; font-size: 10px; display: inline-block; padding: 2px 8px; border-radius: 8px",n={ru:"Дизайн, разработка: Алексей Юрин - https://yurin.dev",en:"Design & Development: Alex Yurin - https://yurin.dev"};console.log(`%c${n[e]}`,"background-color: #FEFBE8; color: #00272B; border: solid 1px #00272B; font-size: 10px; display: inline-block; padding: 2px 8px; border-radius: 8px"),document.prepend(document.createComment(n[e]))}r();o();
