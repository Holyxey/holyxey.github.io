// "use strict"; // нахуя? что это вообще

const videoPreview = (el, videoPreviewSource) => {
    let video = el.parentNode.querySelector(".project-video")
    video.src = videoPreviewSource;
    video.oncanplay = () => {
        el.style.cssText += `animation: easeHide .5s ease-out forwards`
        video.style.cssText += `display: block`
        el.style.cssText += `display: none;`
    }
}
const fragment = new DocumentFragment();

let holyxey = {
    getProjects() {
        const renderProject = (name, image, description, link, videoPreview) => {
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
                <video class="project-video" src="" autoplay muted loop playsinline preload="none"></video>
                <p class="project-description">${description}</p>
                <div class="project-footer">
                    <a href="#" class="project-footer-result">Результат</a>
                    <a class="project-link" href="${link}">Узнать процесс</a>
                </div>
            `;

            fragment.append(article);
            portfolioList.append(fragment);

        }
        for (let key in holyxey.portfolio) {
            if (key.startsWith('project')) {
                let project = holyxey.portfolio[key];
                renderProject(project.name, project.image, project.description, project.link, project.videoPreview);
            }
        }
    },
    portfolio: {
        project1: {
            name: 'Разработка дизайна и верстка для загородного глэмпинга',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/terruar.webp',
            description: 'Описание первого проекта',
            link: '#',
            videoPreview: '/videoPreviews/TerruarPreview.mp4',
        },
        project2: {
            name: 'Редизайн сайта отеля со встроенноым модулем бронирования',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/welton.webp',
            description: 'Описание второго проекта',
            link: '#',
            videoPreview: '/videoPreviews/WeltonPreview.mp4',
        },
        project3: {
            name: 'Веб-афиша для спектакля в Александринском театре',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/mesto.webp',
            description: 'Описание третьего проекта',
            link: '#',
            videoPreview: '/videoPreviews/MestoPreview.mp4',
        }
    }
}
holyxey.getProjects()