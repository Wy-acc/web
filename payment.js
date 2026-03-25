document.querySelector("#show-payment").addEventListener("click",function(){    //on click pay now button, add .active class
    document.querySelector(".popup").classList.add("active");
})

document.querySelector(".popup .close-btn").addEventListener("click",function(){    //on click close button, remove .active class
    document.querySelector(".popup").classList.remove("active");
})

//Card number validation
let cardNumInput = document.querySelector('#cardNum');

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value;
    cNumber = cNumber.replace(/\D/g, "");
    
    let formattedNumber = cNumber.match(/.{1,4}/g);
    if (formattedNumber) {
        formattedNumber = formattedNumber.join("-");
    }
    cardNumInput.value = formattedNumber || '';
});

//Handling Delivery or Pickup Options (changes made in billing details form)
const pickUpTime = document.getElementById('pickupTime');
pickUpTime.style.display = 'none';      //default no pickup time in form (delivery option form)

document.getElementById('option').addEventListener('change', function(event) {
    const selectedOption = document.querySelector('input[name="deliveryType"]:checked').value;
    const streetAddress = document.getElementById('streetadd');
    const areaOption = document.getElementById('areaopt');
    const pickUpTime = document.getElementById('pickupTime');
    const packaging = document.getElementById('Packaging');
    const delivery = document.getElementById('DeliveryFee');

    if (selectedOption === 'delivery') {        //upon delivery option
        streetAddress.style.display = 'block';
        areaOption.style.display = 'block';
        pickUpTime.style.display = 'none';
        packaging.textContent = 'RM 1.20';
        delivery.textContent = 'RM 4.99';
    } else {                                    //upon pickup option 
        streetAddress.style.display = 'none';   //(remove address and town/city selection)
        areaOption.style.display = 'none';
        pickUpTime.style.display = 'block';     //added pickup time selections
        packaging.textContent = 'RM 1.20';
        delivery.textContent = 'RM 0.00';        //delivery fee = 0.00
    }
});

//pay form validation before submission
document.getElementById('payform').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardName = document.getElementById('Noc').value.trim();
    const paymentMethod = document.getElementById('method').value;
    const cardNum = document.getElementById('cardNum').value.replace(/\s/g, "");
    const expireMonth = document.getElementById('ExpireMon').value;
    const expireYear = document.getElementById('ExpireYear').value;
    const cvv = document.getElementById('CVV').value;
    const Fname = document.getElementById('fnBox').value.trim();
    const Lname = document.getElementById('lnBox').value.trim();
    const email = document.getElementById('email').value.trim();
    const streetAddressValue = document.getElementById('address').value.trim();
    const areaOptionValue = document.getElementById('area').value;
    const pickUpTimeValue = document.getElementById('pickupTime').value;

    if (cardName === '' || paymentMethod === '' || cardNum === '' || expireMonth === '' ||
        expireYear === '' || cvv === '' || Fname === '' || Lname === '' || streetAddressValue === '' ||
        areaOptionValue === '' || email === '') {
        alert('Please fill out all fields');
        return;
    }

    window.location.href = 'TQ.html';
});
