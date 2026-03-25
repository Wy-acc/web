const buttons = document.querySelectorAll("button");    
window.onload = init;

buttons.forEach( button => {
    button.addEventListener( 'click', ()=>{
        const faq = button.nextElementSibling;
        const img = button.children[1];

        faq.classList.toggle('show');       //toggle the answer in FAQs
        img.classList.toggle('rotate');     //rotate dropdown arrow in FAQs
    })
})

function init() {       //form validation
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
}

