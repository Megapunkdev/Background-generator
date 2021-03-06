const h3 = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
const body = document.querySelector('body');
const btn = document.querySelector('button');

setRandomRGBGradient();

function setRandomRGBGradient () {
    color1.value = randomRGB();
    color2.value = randomRGB();

    setGradient()
}

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value +')'; 

    h3.textContent = color1.value + ' - ' + color2.value;
}

function randomRGB() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);    
}

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

btn.addEventListener('click', setRandomRGBGradient)