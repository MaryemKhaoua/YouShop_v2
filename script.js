const btn_moins = document.getElementById("btn-quantity-moins");
const btn_plus = document.getElementById("btn-quantity-plus");
var quantity = document.getElementById("btn-quantity");
var currentPrice = document.getElementById("price")
 
let productQnt = 1;
let totalPrice = currentPrice;

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
function validateForm()
{
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}