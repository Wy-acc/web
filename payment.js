// get data from shopcart
import { cart } from './shopcart.js';

// Sample shopping cart data (replace this with your actual shopping cart data)
            var cart = [];

            // Function to display cart items in the table
            function displayCartItems() {
                var tableBody = document.getElementById("cart-items");
                var totalPrice = 0;

                // Clear existing rows
                tableBody.innerHTML = "";

                // Populate table rows with cart items
                cartItems.forEach(function(item) {
                    var row = tableBody.insertRow();
                    var idCell = row.insertCell(0);
                    var productCell = row.insertCell(1);
                    var priceCell = row.insertCell(2);
                    var quantityCell = row.insertCell(3);
                    var totalCell = row.insertCell(4);

                    idCell.textContent = item.id;
                    productCell.textContent = item.product;
                    priceCell.textContent = "$" + item.price.toFixed(2);
                    quantityCell.textContent = item.quantity;
                    var total = item.price * item.quantity;
                    totalCell.textContent = "$" + total.toFixed(2);

                    totalPrice += total;
                });

                // Update total price
                document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
            }

            // Call the displayCartItems function to initially populate the table
            displayCartItems();

            let cardNumInput = 
            document.querySelector('#cardNum') 
        
        cardNumInput.addEventListener('keyup', () => { 
            let cNumber = cardNumInput.value 
            cNumber = cNumber.replace(/\s/g, "") 
        
            if (Number(cNumber)) { 
                cNumber = cNumber.match(/.{1,4}/g) 
                cNumber = cNumber.join(" ") 
                cardNumInput.value = cNumber 
            } 
        })