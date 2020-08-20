const form = document.querySelector('form');
const err_msg = document.querySelector('#errorMessage');

err_msg.style.display = 'none';

form.addEventListener('submit', formSubbmintion);

function formSubbmintion(event) {
    event.preventDefault();
    const product = validateFormSendDataRedirect(form, err_msg, createProduct);

    if (product) {
        createProduct(product).then(res => {
            window.location = '/product.html?id=' + res.id;
        })
    }
}

function createProduct(product) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(res => res.json())
}