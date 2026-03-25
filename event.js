//Slide and container
const images = document.querySelectorAll('.slide_div img');
const container = document.querySelector('.imgContainer');
const containerWidth = container.getBoundingClientRect().width;

images.forEach((img, index) => {
    img.addEventListener('click', function() {  //onclick the image
        
        const imageWidth = img.clientWidth;
        const shiftX = (imageWidth * index) + (imageWidth / 2) - (containerWidth / 2);
        
        container.style.transform = `translateX(${-shiftX}px)`; //move left or right

        images.forEach(i => i.style.transform = 'scale(1)');
        img.style.transform = 'scale(1.5)'; //enlarge
    });
});