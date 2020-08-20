const API_URL = 'http://localhost:3000/api/v1/products'

function getIDFromQuerry() {
  const parts = window.location.search.match(/\?id=([0-9]+)/);
  return parts[1];
}


function addProductToPage(product, size, buttons, parent) {
  let productDiv = document.createElement('div');
  parent.appendChild(productDiv);
  productDiv.outerHTML = `
        <div class="card col-sm-${size}">
        <img src="${product.img_url}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">$ ${product.price}</p>
          <p class="card-text">${product.quantity} left in stock</p>
          ${buttons}
        </div>
      </div>
      `
}


function getProduct(id) {
  return fetch(`${API_URL}/${id}`).then(res => res.json());
}

function validateFormGetProduct(form, error) {

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

  return product;

}