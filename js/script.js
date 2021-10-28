var productNameInput = document.getElementById('productNameInput');
var productpriceInput = document.getElementById('productpriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');


var productsContainer;
if (localStorage.getItem("products") == null) {
    productsContainer = [];
} else {
    productsContainer = JSON.parse(localStorage.getItem("products"));
    displayProduct();
};





function addProduct() {
    var product = {

        name: productNameInput.value,
        price: productpriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
    };
    productsContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    clearForm();
    displayProduct();
    console.log(productsContainer);
};


function clearForm() {
    productNameInput.value = '';
    productpriceInput.value = '';
    productCategoryInput.value = '';
    productDescriptionInput.value = '';

};

function displayProduct() {

    var cartoona = '';
    for (var i = 0; i < productsContainer.length; i++) {

        cartoona += `<tr>
            <td>` + i + `</td>
            <td>` + productsContainer[i].name + `</td>
            <td>` + productsContainer[i].price + `</td>
            <td>` + productsContainer[i].category + `</td>
            <td>` + productsContainer[i].description + `</td>
            <td><button class="btn btn-outline-info"> update</button></td>
            <td><button onclick="deleteProducts(` + i + `)" class="btn btn-outline-danger"> delete</button></td>
            </tr>`;
    }
    document.getElementById('display').innerHTML = cartoona;

};


function deleteProducts(productIndex) {

    productsContainer.splice(productIndex, 1);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    displayProduct()
};

function searcProducts(searchTearm) {

    var cartoona = '';
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].name.toLowerCase().includes(searchTearm.toLowerCase()) == true ||
            productsContainer[i].category.toLowerCase().includes(searchTearm.toLowerCase()) == true)

        {
            cartoona += `<tr>
            <td>` + i + `</td>
            <td>` + productsContainer[i].name + `</td>
            <td>` + productsContainer[i].price + `</td>
            <td>` + productsContainer[i].category + `</td>
            <td>` + productsContainer[i].description + `</td>
            <td><button class="btn btn-outline-info"> update</button></td>
            <td><button onclick="deleteProducts(` + i + `)" class="btn btn-outline-danger"> delete</button></td>
            </tr>`;
        } else {

            console.log('notFound');
        }
    }
    document.getElementById('display').innerHTML = cartoona;
}