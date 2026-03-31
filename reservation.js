//Catering packages pop up image
document.querySelectorAll('.img-box img').forEach(image => {
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src')
    }
});
document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

//Wavy Divisor
let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll',function(){
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value + 4 + 'px';
    wave2.style.backgroundPositionX = 300 + value + -4 + 'px';
    wave3.style.backgroundPositionX = 200 + value + 2 + 'px';
    wave4.style.backgroundPositionX = 100 + value + -2 + 'px';
})