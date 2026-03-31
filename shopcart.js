let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');
let listPaymentHTML = document.querySelector('.listPayment');
let grandTotal = document.querySelector('.grandTotal');
let ordsumSub = document.querySelector('.ordsumSub');
let ordsumPay = document.querySelector('.ordsumPay');

const deliveryPickupopt = document.getElementById('option');

let category = body.dataset.category;
let listProducts = [];                  //array of all items in json file
let carts = [];                         //array of items in shopping cart

//Add to cart sound effect
const cartSound = new Audio();
cartSound.src = "audiovideo/pop.mp3";

//Toggle open and close the cartTab
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

//Add the data from json file into the listProduct in HTML (rendering product to menu)
const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){    //filter the product according to the category of the current display page
        listProducts.filter(product => product.category === category).forEach(product => {
            let newProduct = document.createElement('div'); //create new div element with class="item"
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = 
            `<div class="item-image">
                <img src="${product.image}" alt="">
                <button class="addCart">
                    Add To Cart
                </button>
            </div>
            <h2>${product.name}</h2>
            <div class="price">RM ${product.price.toFixed(2)}</div>`;
            if(product.type != "all"){      //set ID for filter
                newProduct.setAttribute('id', product.type);
            }

            listProductHTML.appendChild(newProduct);
        });
    }
}

//Upon clicking "Add to Cart" button, call addToCart() function and play sound effect
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){    //button "Add to Cart"
        let product_id = positionClick.parentElement.parentElement.dataset.id; 
        addToCart(product_id);
        cartSound.play();
    }
})

//addToCart function that store the item selected to cart array
const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if(carts.length <= 0){
        carts = [{                  //add the items added into carts array
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    };
    addCartToHTML();
    addCartToMemory();
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));    //storing the carts array data into the browser's local storage
}

//Load shopping cart content to HTML page
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';    
    let totalQuantity = 0;  //total quantity for number<span> beside cart icon
    if (carts.length > 0) {
        carts.forEach(cart => {     //add items stored in carts array into HTML cartTab 
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            if (positionProduct !== -1) {
                let info = listProducts[positionProduct];   //get product_id in carts[] and target to the corresponding id in listProducts[] to retrieve data
                totalQuantity += cart.quantity; 
                let newCart = document.createElement('div');    //create new div element with class="item"
                newCart.classList.add('item');
                newCart.dataset.id = cart.product_id;
                newCart.innerHTML = 
                `<div class="image">
                    <img src="${info.image}" alt="">
                </div>
                <div class="name">${info.name}</div>
                <div class="totalPrice">RM ${(info.price * cart.quantity).toFixed(2)}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">+</span>
                </div>`;
                listCartHTML.appendChild(newCart);

            } else {
                console.error(`Product with ID ${cart.product_id} not found`);
            }
        });
    }
    iconCartSpan.innerText = totalQuantity;
}

//Add information in shopping cart to payment.html Cart Totals table
const addCartToPayment = () => {
    listPaymentHTML.innerHTML = '';
    let totalPay = 0;
    let ordPay = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {     //add items stored in carts array into HTML cartTab 
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            if (positionProduct !== -1) {
                let info = listProducts[positionProduct];   //get product_id in carts[] and target to the corresponding id in listProducts[] to retrieve data 
                totalPay += info.price * cart.quantity;
                let newPayment = document.createElement('tr');
                newPayment.classList.add('item');
                newPayment.dataset.id = cart.product_id;
                newPayment.innerHTML =
                `<td><img src="${info.image}"/></td>
                <td><span>${info.name}</span></td>
                <td>RM ${info.price.toFixed(2)}</td>
                <td>${cart.quantity}</td>
                <td>RM ${(info.price * cart.quantity).toFixed(2)}</td>`;
                listPaymentHTML.appendChild(newPayment);
                grandTotal.innerHTML = `RM ${totalPay.toFixed(2)}`;
                ordsumSub.innerHTML = `RM ${totalPay.toFixed(2)}`;
            } else {
                console.error(`Product with ID ${cart.product_id} not found`);
            }
        });
        ordPay = totalPay + 6.19;
        ordsumPay.innerHTML = `RM ${ordPay.toFixed(2)}`;

        ordPay = null;
        deliveryPickupopt.addEventListener('change', function(event) {
            const selectedOption = document.querySelector('input[name="deliveryType"]:checked').value;
            if (selectedOption === 'delivery') {
                ordPay = totalPay + 6.19;
            } else {
                ordPay = totalPay + 1.20;
            }
            ordsumPay.innerHTML = `RM${ordPay.toFixed(2)}`;
        });
    } else {
        grandTotal.innerHTML = `$0.00 (no item in cart)`;
    }
}

//Upon clicking '-' / '+' button, call changeQuantity() function
listCartHTML.addEventListener('click', (event) => {     //click the '-' / '+' button in shopping cart tab
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantity(product_id, type);
    };
})

const changeQuantity = (product_id, type) => {  //increase or decrease the qty of cart item
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0) {
        switch(type){
            case 'plus':    //plus
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
            default:    //'minus'
                let valueChange = carts[positionItemInCart].quantity - 1;
                if(valueChange > 0){
                    carts[positionItemInCart].quantity = valueChange;
                }else{
                    carts.splice(positionItemInCart, 1);    //if item = 0, remove from carts[]
                }
                break;
        };
    };
    addCartToMemory();  //update data
    addCartToHTML();
    addCartToPayment();
}

const initApp = () => {
    //get data from json
    fetch(`products.json`).then(response => response.json()).then(data => {     //require changes for different category
        listProducts = data;       //Add the json data into listProducts array
        addDataToHTML();

        //get cart from memory
        if(localStorage.getItem('cart')) {
            carts = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
            addCartToPayment();
        }
    })
}

initApp();