const product_id = getIDFromQuerry();
const products_section = document.querySelector('main section');

getProduct(product_id).then(showProduct);

function showProduct(product) {
    const bttn = `<a href="/edit.html?id=${product.id}" class="btn btn-warning">Edit product</a>`;
    addProductToPage(product, 12, bttn, products_section);
}