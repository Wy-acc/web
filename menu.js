let productContainers = [...document.querySelectorAll('.slide-container')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];
let preBtn = [...document.querySelectorAll('.pre-btn')];

let text = document.getElementById('parallex-text');
let parallex1 = document.getElementById('element2');
let parallex2 = document.getElementById('element1');

let waves = [];
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 4; j++) {
        waves.push(document.getElementById(`wave${i}-${j}`));
    }
}

let cakeText1 = document.getElementById('cake-text');
let cakeText2 = document.getElementById('cake-text2');
let cakePic1 = document.getElementById('cakePic1');
let cakePic2 = document.getElementById('cakePic2');

let drinksText1 = document.getElementById('drinks-text');
let drinksText2 = document.getElementById('drinks-text2');
let drinksText5 = document.getElementById('drinks-text5');
let drinksPic2 = document.getElementById('drinksPic2');
let drinksPic3 = document.getElementById('drinksPic3');

let pastriesText1 = document.getElementById('pastries-text1');
let pastriesText3 = document.getElementById('pastries-text3');
let pastriesText4 = document.getElementById('pastries-text4');
let pastriesPic1 = document.getElementById('pastriesPic1');
let pastriesPic2 = document.getElementById('pastriesPic2');
let pastriesPic3 = document.getElementById('pastriesPic3');

let breakfastText1 = document.getElementById('breakfast-text1');
let breakfastText3 = document.getElementById('breakfast-text3');
let breakfastPic1 = document.getElementById('breakfastPic1');
let breakfastPic2 = document.getElementById('breakfastPic2');

let pastaText1 = document.getElementById('pasta-text1');
let pastaText2 = document.getElementById('pasta-text2');
let pastaPic1 = document.getElementById('pastaPic1');
let pastaPic2 = document.getElementById('pastaPic2');
let pastaPic3 = document.getElementById('pastaPic3');

//slide show 
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function detectDisplaySize() {
    const windowWidth = window.screen.width;
    const windowHeight = window.screen.height;

    if (windowWidth === 1024 && windowHeight === 768) {
        return '1024x768';
    } else if (windowWidth === 1920 && windowHeight === 1080) {
        return '1920x1080';
    } else {
        return 'unknown';
    }
}

window.addEventListener('scroll', () => {
    const displaySize = detectDisplaySize();
    let waveValue = window.scrollY;
    let parallexValue = window.scrollY - 600;
    let cakeValue = window.scrollY - 1200;
    let drinksValue = window.scrollY - 2000;
    let pastriesValue = window.scrollY - 3200;
    let breakfastValue = window.scrollY - 3900;
    let pastaValue = window.scrollY - 4550;

    if(displaySize == '1024x768') {
        parallexValue = window.scrollY - 450;
        cakeValue = window.scrollY - 1200;
        drinksValue = window.scrollY - 1900;
        pastriesValue = window.scrollY - 3000;
        breakfastValue = window.scrollY - 3750;
        pastaValue = window.scrollY - 4500;
    }

    waves.forEach((wave, index) => {
        let sequence = index % 4;
        let value;
        let multiplier;
        if(sequence == 1){
            value = 400;
            multiplier = 4;
        }else if(sequence == 2){
            value = 300;
            multiplier = -4;
        }else if(sequence == 3){
            value = 200;
            multiplier = 2;
        }else {
            value = 100;
            multiplier = -2;
        }
        let position = value + waveValue * multiplier + 'px';
        wave.style.backgroundPositionX = position;
    });

    if (parallexValue >= 0) {
        parallexValue = 0;
    }

    text.style.marginTop = parallexValue * 1.5 + 'px';
    parallex1.style.left = parallexValue * -0.5 + 'px';
    parallex2.style.left = parallexValue * 0.5 + 'px';

    if (cakeValue >= 0) {
        cakeValue = 0;
    }

    cakeText1.style.marginTop = cakeValue * 1.5 + 'px';
    cakeText2.style.marginTop = cakeValue * 1.5 + 'px';
    cakePic1.style.left = cakeValue * 0.5 + 'px';
    cakePic2.style.left = cakeValue * -0.5 + 'px';

    if (drinksValue >= 0) {
        drinksValue = 0;
    }

    drinksText1.style.marginTop = drinksValue * 1.5 + 'px';
    drinksText2.style.marginTop = drinksValue * 1.5 + 'px';
    drinksText5.style.left = drinksValue * 1.5 + 40 + 'px';
    drinksPic3.style.left = drinksValue * 0.5 + 'px';
    drinksPic2.style.left = drinksValue * -0.5 + 'px';

    if (pastriesValue >= 0) {
        pastriesValue = 0;
    }

    pastriesText1.style.marginBottom = pastriesValue * 0.5 + 'px';
    pastriesText3.style.marginTop = pastriesValue * 0.5 + 'px';
    pastriesText4.style.marginBottom = pastriesValue * 0.5 + 'px';
    pastriesPic1.style.left = pastriesValue * 0.5 + 'px';
    pastriesPic2.style.left = pastriesValue * -0.5 + 'px';
    pastriesPic3.style.left = pastriesValue * -0.5 + 'px';

    if (breakfastValue >= 0) {
        breakfastValue = 0;
    }

    breakfastText1.style.marginTop = breakfastValue * 0.5 + 'px';
    breakfastText3.style.marginBottom = breakfastValue * 0.5 + 'px';
    breakfastPic1.style.left = breakfastValue * 0.5 + 'px';
    breakfastPic2.style.left = breakfastValue * -0.5 + 'px';

    if (pastaValue >= 0) {
        pastaValue = 0;
    }

    pastaText1.style.marginTop = pastaValue * 0.5 + 'px';
    pastaText2.style.marginTop = pastaValue * 0.5 + 'px';
    pastaPic1.style.left = pastaValue * 0.5 + 'px';
    pastaPic2.style.marginTop = pastaValue * 0.5 + 'px';
    pastaPic3.style.left = pastaValue * 0.5 + 'px';
})
