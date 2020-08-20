const form = document.querySelector('form');
const err_msg = document.querySelector('#errorMessage');
const product_id = getIDFromQuerry();


err_msg.style.display = 'none';


function populateWindowWithData(product) {
    document.querySelector('#title').value = product.title;
    document.querySelector('#description').value = product.description;
    document.querySelector('#price').value = product.price;
    document.querySelector('#quantity').value = product.quantity;
    document.querySelector('#image').value = product.img_url;
}


getProduct(product_id).then(populateWindowWithData);

form.addEventListener('submit', formSubbmintion);

function formSubbmintion(event) {
    event.preventDefault();
    const product = validateFormGetProduct(form, err_msg, updateProduct);

    if (product) {
        updateProduct(product).then(() => {
            window.location = '/product.html?id=' + product_id;
        })
    }
}

function updateProduct(product) {
    return fetch(`${API_URL}/${product_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(res => res.json());
}