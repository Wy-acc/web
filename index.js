//Parallex effect on Intro and Title
const title = document.querySelector('.title')
const title2 = document.querySelector('.title2')
const house1 = document.querySelector('.house1')
const layer2 = document.querySelector('.layer2')
const Layer3 = document.querySelector('.Layer3')
const layer4 = document.querySelector('.layer4')
const Layer5 = document.querySelector('.Layer5')

//Coffee Cup image
const displayImage = document.getElementById('sectionL1');

//Best seller
let previewBest = document.querySelector('.best-preview');
let previewBox = previewBest.querySelectorAll('.preview')

// parallax img effect on scroll
document.addEventListener('scroll',function(){
    let value =window.scrollY

    title.style.marginTop = value *1.1+ 'px'
    title2.style.marginTop = value *1.1+ 'px'

    house1.style.marginLeft = -value + 'px'

    layer2.style.marginTop = -value * 1.5+ 'px'
    Layer3.style.marginBottom = -value *1.1+ 'px'

    layer4.style.marginBottom = -value * 1.6 +'px'
    Layer5.style.marginBottom = -value * 2.1 +'px'

    sectionL1.style.marginBottom = -value * 1.6 +'px'
})


//slide show (review)
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}                

document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    showSlides(slideIndex);
});

//coffee cup change image
function changeImage(){
    let displayImage=document.getElementById('sectionL1');

    if(displayImage.src.match('image/sectionL1.png')){
      displayImage.src='image/sectionL2.png';
    }else{
      displayImage.src='image/sectionL1.png';
    };
}

//best seller pop out and close
document.querySelectorAll('.slider .pop').forEach(product => {
  product.onclick = () =>{
    previewBest.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.xmark').onclick = () =>{
    close.classList.remove('active');
    previewBest.style.display = 'none';
  };
});

