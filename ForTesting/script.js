// "use strict"; // нахуя? что это вообще

const fragment = new DocumentFragment();

const videoPreview = (el, videoPreviewSource) => {
    let video = el.parentNode.querySelector(".project-video")
    video.src = videoPreviewSource;
    video.oncanplay = () => {
        let b = document.createElement('button')
        b.classList.add('project-show-preview')
        b.innerHTML = 'превью'
        b.style.cssText +=
            `top: ${'calc(' + el.parentNode.querySelector('.project-name').getBoundingClientRect().height + 'px + 2.5rem)'};
            animation: previewShow 2s ease-out forwards;`
        b.addEventListener("click", () => {
                el.style.cssText += `animation: easeHide .5s ease-out forwards`
                video.style.cssText += `display: block`
                el.style.cssText += `display: none;`
        })
        fragment.append(b);
        el.parentNode.querySelector('.project-footer').append(b)
    }
}

let holyxey = {
    getProjects() {
        const renderProject = (name, image, description, link, videoPreview, result) => {
            let portfolioList = document.querySelector('#portfolio')
            if (!portfolioList) {
                console.error('Portfolio list not found');
                return;
            }

            let article = document.createElement('article')
            article.classList.add('project')
            article.innerHTML = `
                <h3 class="project-name">${name}</h3>
                <img class="project-image" src="${image}" onload="setTimeout(()=>{videoPreview(this, '${videoPreview}')}, 1000)" alt="${name}">
                ${videoPreview ? `<video class="project-video" src="" autoplay muted loop playsinline preload="none"></video>` : ''}
                ${description ? `<p class="project-description">${description}</p>` : ''}
                <div class="project-footer">
                    ${link ? `<a class="project-link" href="${link}">Процесс</a>` : ''}
                    <a href="${result}" target="_blank" class="project-footer-result">Результат</a>
                </div>
            `;

            fragment.append(article);
            portfolioList.append(fragment);

        }
        for (let key in holyxey.portfolio) {
            if (key.startsWith('project')) {
                let project = holyxey.portfolio[key];
                renderProject(project.name, project.image, project.description, project.link, project.videoPreview, project.result);
            }
        }
    },
    portfolio: {
        project1: {
            name: 'Разработка дизайна глэмпинга',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/terruar.webp',
            description: 'Описание первого проекта',
            link: '#',
            result: 'https://terruarhome.ru/',
            videoPreview: '/ForTesting/videoPreviews/TerruarPreview.mp4',
        },
        project2: {
            name: 'Редизайн сайта отеля Редизайн сайта отеля Редизайн сайта отеля Редизайн сайта отеля',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/welton.webp',
            description: 'Описание второго проекта',
            link: '',
            result: 'https://weltonhotel.ru',
            videoPreview: '/ForTesting/videoPreviews/WeltonPreview.mp4',
        },
        project3: {
            name: 'Веб-афиша для спектакля',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/mesto.webp',
            description: 'Описание третьего проекта',
            link: '',
            result: 'https://mesto.dance',
            videoPreview: '/ForTesting/videoPreviews/MestoPreview.mp4',
        }
    }
}
holyxey.getProjects()