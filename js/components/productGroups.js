import { fetchProducts } from "../fetch.js";

const products = await fetchProducts()
console.log(products) 

const productGroups = document.querySelector(".product-groups");

productGroups.innerHTML = `<h2> Vores Tre Produktgrupper </h2>`;

const productListTmpl = (product) => {
  return `
        <h3>${product.title}</h3>

        <div class="product-group">

            <div class="icon-text">
                <div class="product-icon">
                    <img src="${product.icon}" alt="${product.title}">
                </div>
                <p>${product.description}</p>
            </div>

        </div>
    `;
};

export const productList = () => {
  if (productGroups) {
    products.forEach((element) => {
      productGroups.insertAdjacentHTML("beforeend", productListTmpl(element));
    });
  }}