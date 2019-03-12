const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const animate = document.getElementById('animate');

function inactiveAnimateBackground() {
    animate.textContent = 'Анимировать';
    body.style.backgroundSize = "inherit";
    body.classList.toggle('animate-background');
}
function activeAnimateBackground() {
    animate.textContent = 'Отключить анимацию';
    body.style.backgroundSize = "200% 200%";
    body.classList.toggle('animate-background');
}
function checkAnimate() {
    if (animate.textContent === 'Анимировать') {
        return true;
    } else {
        return false;
    }
}
function toggleAnimateBackground() {
    if (checkAnimate()) {
        activeAnimateBackground();
    } else {
        inactiveAnimateBackground();
    }
}
function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background + ";";
    if (!checkAnimate()) {
        activeAnimateBackground();
    } else {
        return;
    }
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
animate.addEventListener("click", toggleAnimateBackground);