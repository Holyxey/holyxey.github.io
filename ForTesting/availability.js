let projects = document.querySelectorAll('.project');

const checkAvailability = (el, url, status) => {
    fetch(url)
        .then(response => {
            if (response.ok) {
                status.style.backgroundColor = "#17C3B2";
            } else {
                status.style.backgroundColor = "#c33717";
            }
        })
        .catch(error => {
            status.style.backgroundColor = "#c33717";
            // console.error("Произошла ошибка:", error);
        });
}

projects.forEach(project => {
    let url = project.querySelector('.project-footer-result').href;
    let status = project.querySelector('.project-online');
    checkAvailability(this, url, status);
})