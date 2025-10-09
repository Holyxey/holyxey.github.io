function o(){let t=document.createComment("Дизайн, разработка: Алексей Юрин");document.prepend(t);let e=document.documentElement.lang.startsWith("ru")?"ru":"en",n="background-color: #FEFBE8; color: #00272B; border: solid 1px #00272B; font-size: 10px; display: inline-block; padding: 2px 8px; border-radius: 8px";if(e==="ru")console.log("%cДизайн и разработка: Алексей Юрин - https://yurin.dev",n);else console.log("%cDesign & Development: Alex Yurin - https://yurin.dev",n)}var a=()=>{let t={path:window.location.origin,year:new Date().getFullYear().toString()},e=document.createElement("script");e.type="application/ld+json",e.innerHTML=`
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "${t.path}",
            "copyrightYear": "${t.year}",
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
    `,document.body.append(e)};o();a();
