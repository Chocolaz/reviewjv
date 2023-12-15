//Sirakran Kranjanawilsgul 65130500079
function addNewProduct() {
    const productInput = document.getElementById("product-input")
    
    if (productInput != "") {
        //div
        const product = document.createElement('div')
        product.classList.add('product-item')

        //text
        const pElement = document.createElement('p')
        pElement.innerHTML = productInput.value;

        // button
        const removeButton = document.createElement('button')
        button.type = 'button'
        button.classList.add('remove-product')
        button.innerHTML = 'Remove'
        button.addEventListener('click', removeProduct)


        const productList = document.getElementById("product-list")

        product.append(pElement, removeButton)
        productList.appendChild(product)
    }


}

function removeProduct(productId) {
    productId.target.parentNode.remove();
}

function removeAllProduct() {
    const allProduct = document.querySelectorAll('.product-list')
    allProduct.remove()
}

function registerEvent() {
    document
        .getElementById("add-button")
        .addEventListener("keyup", addNewProduct);
    document
        .getElementById("removeAll-button")
        .addEventListener("click", removeAllProduct);
}

registerEvent()
