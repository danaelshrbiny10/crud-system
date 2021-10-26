var productNameInput = document.getElementById('productNameInput');
var productpriceInput = document.getElementById('productpriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');


function addProduct() {
    var product = {

        name: productNameInput.value,
        price: productpriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
    };

    console.log(product);
}