document.addEventListener("DOMContentLoaded", function () {
    let springBlock = document.getElementById('springBlock');
    let springLink = springBlock.querySelector('a[class="springBlockSectionButton"]').href;
    console.log(springLink)

    springBlock.addEventListener("click", function () {
        location.href = springLink;
    })
})