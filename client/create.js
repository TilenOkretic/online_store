const form = document.querySelector('form');
const err_msg = document.querySelector('#errorMessage');

err_msg.style.display = 'none';

form.addEventListener('submit', formSubbmintion);

function formSubbmintion(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const price = Number(formData.get('price'));
    const quantity = Number(formData.get('quantity'));


    if (title.trim() == '') {
        err_msg.textContent = "Title is required!";
        err_msg.style.display = '';
        return;
    }

    if (isNaN(price) || price <= 0) {
        err_msg.textContent = "Price must be greater than $0";
        err_msg.style.display = '';
        return;
    }

    if (!Number.isInteger(quantity) || quantity < 0) {
        err_msg.textContent = "Quantity must be positive whole number";
        err_msg.style.display = '';
        return;
    }

    const product = {
        title,
        description: formData.get('description'),
        price,
        quantity,
        img_url: formData.get('img_url')
    };

    createProduct(product).then(result => {
        window.location = '/product.html?id=' + result.id;
    });
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
