var productNameInput = document.getElementById('productNameInput');
var productpriceInput = document.getElementById('productpriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');


var productsContainer = [];

function addProduct() {
    var product = {

        name: productNameInput.value,
        price: productpriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
    };
    productsContainer.push(product);
    clearForm();
    console.log(productsContainer);
}


function clearForm() {
    productNameInput.value = '';
    productpriceInput.value = '';
    productCategoryInput.value = '';
    productDescriptionInput.value = '';

}