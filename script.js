const btn_moins = document.getElementById("btn-quantity-moins");
const btn_plus = document.getElementById("btn-quantity-plus");
var quantity = document.getElementById("btn-quantity")

let productQnt = 1;
btn_plus.addEventListener("click", function()
{
    productQnt++;
    quantity.textContent = productQnt;

})
btn_moins.addEventListener("click", function()
{
    if (productQnt > 1)
    productQnt--;
    quantity.textContent = productQnt;

})
