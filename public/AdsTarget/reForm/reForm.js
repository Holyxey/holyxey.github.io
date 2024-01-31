function setFormStyles(el) {
    let reference = document.getElementById('consultation')
    let refH = reference.querySelector("p[class='h1']");
    let refP = reference.querySelector("p[class='h4']");
    let refInput = reference.querySelector("input");

    let styleH = window.getComputedStyle(refH)

    console.log(reference + refH + refP + refInput)
    return (reference + refH + refP + refInput);
}