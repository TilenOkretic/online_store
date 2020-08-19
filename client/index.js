const API_URL = 'http://localhost:3000/api/v1/products';

const products_section = document.querySelector('main section');

getProducts().then(showProducts);

function getProducts() {
    return fetch(API_URL)
        .then(res => res.json());
}


function showProducts(products) {
    products.forEach(product => {
        let productDiv = document.createElement('div');
        products_section.appendChild(productDiv);
        productDiv.outerHTML = `
        <div class="card col-sm-4">
        <img src="${product.img_url}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.discription}</p>
          <a href="/product.html?id=${product.id}" class="btn btn-primary">View product</a>
        </div>
      </div>
      `
    });
}