const product_id = getIDFromQuerry();
const products_section = document.querySelector('main section');

getProduct(product_id).then(showProduct);

function showProduct(product) {
    const bttn = `
    <a href="/edit.html?id=${product.id}" class="btn btn-info">Edit product</a>
    <button id="deleteButton" class="btn btn-danger">Delete product</button>`;
    addProductToPage(product, 12, bttn, products_section);

    const del_bttn = document.querySelector('#deleteButton');

    del_bttn.addEventListener('click', () => {
        deleteProduct(product_id).then(() =>
            window.location = '/');
    });
}


function deleteProduct(id) {
    return fetch(`${API_URL}/${product_id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}