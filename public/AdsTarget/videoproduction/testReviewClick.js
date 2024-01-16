if (document.documentElement.clientWidth > 500) {
let setI = 0;

function testReviewClick(el) {
    
    if (setI == 0) {
        el.style.cssText = "height:unset; max-height:unset";
        setI++;
    } else {
        el.style.cssText = "height:40vh; max-height:350px";
        setI--;
    } 
}
function IisUno(el) {
    el.style.cssText = "height:40vh; max-height:350px";
    setI = 0;
}
}