var productNameInput = document.getElementById('productNameInput');
var productpriceInput = document.getElementById('productpriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var addProduct = document.getElementById('products');
var userNameAlert = document.getElementById('userNameAlert');
var productsContainer;
if (localStorage.getItem("products") == null) {
    productsContainer = [];
} else {
    productsContainer = JSON.parse(localStorage.getItem("products"));
    displayProduct();
};


function validateProductName() {

    var regux = /^[A-Z][a-z]{3,8}$/;
    if (regux.test(productNameInput.value) == true) {
        // console.log("valid");
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        userNameAlert.classList.replace('d-block', "d-none");

        return true;
    } else {
        // console.log("inValid");
        userNameAlert.classList.replace('d-none', "d-block");
        productNameInput.classList.add("is-invalid");
        productNameInput.classList.remove("is-valid");

        return false;
    }
}

productNameInput.addEventListener("keyup", validateProductName);

function addProduct() {

    if (validateProductName() == true) {
        var product = {

            name: productNameInput.value,
            price: productpriceInput.value,
            category: productCategoryInput.value,
            description: productDescriptionInput.value,
        }
        productsContainer.push(product);
        localStorage.setItem("products", JSON.stringify(productsContainer));
        displayProduct();
        clearForm();
        // console.log(productsContainer);
    }
}


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
            <td><button onclick=' updateProducts(` + i + `);' class="btn btn-outline-info"> update</button></td>
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
            <td><button  onclick="updateProducts(` + i + `);"class="btn btn-outline-warning"> update</button></td>
            <td><button onclick="deleteProducts(` + i + `)" class="btn btn-outline-danger"> delete</button></td>
            </tr>`;
        } else {

            console.log('notFound');
        }
    }
    document.getElementById('display').innerHTML = cartoona;;
};

function updateProducts(productsIndex) {
    productNameInput.value = productsContainer[productsIndex].name;
    productpriceInput.value = productsContainer[productsIndex].price;
    productCategoryInput.value = productsContainer[productsIndex].category;
    productDescriptionInput.value = productsContainer[productsIndex].description;

    addProduct.innerHTML = "update";

    addProduct.onclick = function() {
        productsContainer[productsIndex].name = productNameInput.value;
        productsContainer[productsIndex].price = productpriceInput.value;
        productsContainer[productsIndex].category = productCategoryInput.value;
        productsContainer[productsIndex].description = productDescriptionInput.value;
        localStorage.setItem("products", JSON.stringify(productsContainer));
        displayProduct();
        addProduct.innerHTML = "add Product";
        addProduct.onclick = "add Product";
        clearForm();
    }
};