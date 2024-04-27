// "use strict"; // нахуя? что это вообще

const videoPreview = (el, videoPreviewSource) => {
    let video = el.parentNode.querySelector(".project-video")
    video.src= videoPreviewSource;
    video.addEventListener('loadeddata', () => {
        video.style.display = 'block'
        el.style.display = 'none'
    })
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
                <img class="project-image" src="${image}" onload="videoPreview(this, '${videoPreview}')" alt="${name}">
                <video class="project-video" src="" autoplay muted loop playsinline></video>
                <p class="project-description">${description}</p>
                <a class="project-link" href="${link}">Поднобнее о кейсе</a>
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
            name: 'CUSTOM DESIGN AND DEVELOPMENT OF A WEBSITE FOR GLAMPING IN THE WOODS',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/terruar.webp',
            description: 'Описание первого проекта',
            link: '#',
            videoPreview: 'https://holyxey.github.io/ForTesting/videoPreviews/TerruarPreview.WebM',
        }, project2: {
            name: 'Второй проект',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/welton.webp',
            description: 'Описание второго проекта',
            link: '#',
            videoPreview: 'https://holyxey.github.io/ForTesting/videoPreviews/TerruarPreview.WebM',
        }, project3: {
            name: 'Третий проект',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/mesto.webp',
            description: 'Описание третьего проекта',
            link: '#',
            videoPreview: 'https://holyxey.github.io/ForTesting/videoPreviews/TerruarPreview.WebM',
        }
    }
}
holyxey.getProjects()