const fragment = new DocumentFragment();

const videoPreview = (el, videoPreviewSource) => {
    let video = el.parentNode.querySelector(".project-video")
    video.src = videoPreviewSource;
    if (window.innerWidth > 550) {
        video.oncanplay = () => {
            el.style.cssText += `animation: easeHide .5s ease-out forwards`
            video.style.cssText += `display: block`
            el.style.cssText += `display: none;`
        }
    } else {
        video.src = '';
    }
}

let holyxey = {
    getProjects() {
        const renderProject = (name, image, description, link, videoPreview, result, onlineDetector) => {
            let portfolioList = document.querySelector('#portfolio')
            if (!portfolioList) {
                console.error('Portfolio list not found');
                return;
            }

            let article = document.createElement('article')
            article.classList.add('project')
            article.innerHTML = `
                <h3 class="project-name">${name}</h3>
                <img class="project-image" src="${image}" onload="${videoPreview ? `setTimeout(()=>{videoPreview(this, '${videoPreview}')}, 1000)` : ''}" alt="${name}">
                ${videoPreview ? `<video class="project-video" src="" autoplay muted loop playsinline preload="none"></video>` : ''}
                ${description ? `<p class="project-description">${description}</p>` : ''}
                <div class="project-footer">
                    ${link ? `<a class="project-link" href="${link}">Процесс</a>` : ''}
                    ${result ? `<a href="${result}" target="_blank" class="project-footer-result">Результат${onlineDetector ? `<div class="project-online"></div>` : ''}</a>` : ''}
                </div>
                <script type="application/ld+json">
                    {
                      "@context": "http://schema.org",
                      "@type": "CreativeWork",
                      "name": "${name}",
                      "description": "${description}",
                      "url": "${result}",
                      "image": {
                        "@type": "ImageObject",
                        "url": "${image}",
                        "caption": "${name}"
                      },
                      ${videoPreview ? `
                      "video": {
                        "@type": "VideoObject",
                        "url": "${videoPreview}",
                        "description": "${name}"
                      },` : ''}
                      ${link ? `
                      "isBasedOn": "${link}",
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "url": "${link}"
                      },` : ''}
                      "creator": {
                        "@type": "Person",
                        "name": "Holyxey - Alex Yurin",
                        "email": "contact@holyxey.com",
                        "url": "https://holyxey.com"
                      }
                    }
                </script> 
            `;

            fragment.append(article);
            portfolioList.append(fragment);

        }
        for (let key in holyxey.portfolio) {
            if (key.startsWith('project')) {
                let project = holyxey.portfolio[key];
                renderProject(project.name, project.image, project.description, project.link, project.videoPreview, project.result, project.onlineDetector);
            }
        }
    },
    portfolio: {
        project1: {
            name: 'Header',
            image: 'imagePreview/Terruar.webp',
            description: 'Description',
            link: '',
            result: 'https://terruarhome.ru/',
            // videoPreview: 'videoPreviews/TerruarPreview.mp4',
            onlineDetector: true,
        }, // Terruar
        project2: {
            name: 'Header',
            image: 'imagePreview/Welton.webp',
            description: 'Description',
            link: '',
            result: 'https://weltonhotel.ru',
            // videoPreview: 'videoPreviews/WeltonPreview.mp4',
            onlineDetector: true,
        }, // Welton
        project3: {
            name: 'Header',
            image: 'imagePreview/Do.webp',
            description: 'Description',
            link: '',
            result: 'https://dowine.bar',
            // videoPreview: 'videoPreviews/MestoPreview.mp4',
            onlineDetector: true,
        }, // Do
        project4: {
            name: 'Header',
            image: 'imagePreview/Mesto.webp',
            description: 'Description',
            link: '',
            result: 'https://mesto.dance',
            // videoPreview: 'videoPreviews/MestoPreview.mp4',
            onlineDetector: true,
        }, // Mesto
        project5: {
            name: 'Header',
            image: 'imagePreview/Nepokoi.webp',
            description: 'Description',
            link: '',
            result: 'https://nepokoi.art',
            // videoPreview: 'videoPreviews/MestoPreview.mp4',
            onlineDetector: true,
        }, // Nepokoi
        project6: {
            name: 'Header',
            image: 'imagePreview/Supreme.webp',
            description: 'Description',
            link: '',
            result: 'https://supremehuckster.ru/premium',
            // videoPreview: 'videoPreviews/MestoPreview.mp4',
            onlineDetector: true,
        }, // Supreme
        project7: {
            name: 'Header',
            image: 'imagePreview/El-teacher.webp',
            description: 'Description',
            link: '',
            result: 'https://esl-teacher.webflow.io',
            // videoPreview: 'videoPreviews/MestoPreview.mp4',
            onlineDetector: true,
        }, // El-teacher
    }
}
holyxey.getProjects()