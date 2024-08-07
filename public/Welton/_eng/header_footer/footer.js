// <script>
    (()=>{
    window.addEventListener('load', ()=>{
        const headerHeight = document.getElementById('header').offsetHeight
        const theLine = document.querySelector('.uc-theline')
        theLine.style.paddingTop = `${headerHeight}px`
    })
})()
// </script>