window.onload = function() {
    if (document.body.style.clipPath === undefined || document.body.style.webkitClipPath === undefined) {
        document.querySelector('.about-image').style.display = "none";
        document.querySelector('.about-hex').style.display = "none";
    }
};