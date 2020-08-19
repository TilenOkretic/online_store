const products_section = document.querySelector('main section');

getProducts().then(showProducts);

function getProducts() {
  return fetch(API_URL)
    .then(res => res.json());
}


function showProducts(products) {
  products.forEach(product => {
    const bttn = `<a href="/product.html?id=${product.id}" class="btn btn-primary">View product</a>`;
    addProductToPage(product, 4,bttn, products_section);
  });
}