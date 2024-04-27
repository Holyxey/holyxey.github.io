// "use strict"; // нахуя? что это вообще

const videoPreview = (el, videoPreviewSource) => {
    let video = el.parentNode.querySelector(".project-video")
    if (window.innerWidth > 600) {
        setTimeout(()=>{
            video.src= videoPreviewSource;
        }, 1000)
        video.oncanplay = () => {
            el.style.cssText += `animation: easeHide .5s ease-out forwards`
            setTimeout(() => {
                video.style.cssText += `display: block;`
                el.style.cssText += `display: none;`
            }, 1000)
        }
    } else {
        video.remove()
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
                <img class="project-image" src="${image}" onload="videoPreview(this, '${videoPreview}')" alt="${name}">
                <video class="project-video" src="" autoplay muted loop playsinline></video>
                <p class="project-description">${description}</p>
                <a class="project-link" href="${link}">Узнать процесс</a>
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
            videoPreview: 'https://holyxey.github.io/ForTesting/videoPreviews/TerruarPreview.mp4',
        }, project2: {
            name: 'Редизайн сайта отеля со встроенноым модулем бронирования',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/welton.webp',
            description: 'Описание второго проекта',
            link: '#',
            videoPreview: 'https://holyxey.github.io/ForTesting/videoPreviews/WeltonPreview.mp4',
        }, project3: {
            name: 'Третий проект',
            image: 'https://holyxey.github.io/holyxey/imgs/cases/mesto.webp',
            description: 'Описание третьего проекта',
            link: '#',
            videoPreview: 'https://holyxey.github.io/ForTesting/videoPreviews/TerruarPreview.mp4',
        }
    }
}
holyxey.getProjects()