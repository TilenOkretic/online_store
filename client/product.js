const product_id = getIDFromQuarry();
const  products_section = document.querySelector('main section');

getProduct(product_id).then(showProduct);

function getProduct(id) {
    return fetch(`${API_URL}/${id}`).then(res => res.json());
}

function showProduct(product) {
    const bttn = `<a href="/edit.html?id=${product.id}" class="btn btn-warning">Edit product</a>`;
    addProductToPage(product, 12,bttn, products_section);
}