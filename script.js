const btn_moins = document.getElementById("btn-quantity-moins");
const btn_plus = document.getElementById("btn-quantity-plus");
const quantity = document.getElementById("btn-quantity");
const currentPrice = document.getElementById("price");
const removeBtn = document.getElementById("remove-items");


let productQnt = 1;
let price = 29.00;


function totalPrice() {
    const totalPrice = price * productQnt;
    currentPrice.textContent = totalPrice.toFixed(2) + "$";
}

btn_plus.addEventListener("click", function () {
    productQnt++;
    quantity.textContent = productQnt;
    totalPrice();
});

btn_moins.addEventListener("click", function () {
    if (productQnt > 1) {
        productQnt--;
        quantity.textContent = productQnt;
        totalPrice();
    }
});

const productSection = document.querySelector("#product-1");

    removeBtn.addEventListener('click', function ()
    {
        removeBtn.parentElement.parentElement.parentElement.remove();
        product.remove();
    });
    
//burger menu
const hamburgerButton = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburgerButton.addEventListener("click", function () {
    menu.classList.toggle("active");
});