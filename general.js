//header appear background color and stick on top upon scrolling
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})

//Shopping cart (header) sound effect
const audio = new Audio();
audio.src = "audiovideo/cash-register-kaching-sound-effect.mp3";