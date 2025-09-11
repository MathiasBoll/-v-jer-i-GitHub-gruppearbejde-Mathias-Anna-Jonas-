import { fetchRecommended } from "../fetch.js";

const recommended = await fetchRecommended();
console.log(recommended); 

const recommendedProducts = document.querySelector(".recommended-products");


const recommendedTmpl = (img) => {
    return `
    <div class="recommended-img">
        <img src="${recommended.img}" alt="recommended image">
    </div>
    `;
}




const productInfoTmpl = (recommended) => {
  return `
        <h3>${recommended.title}</h3>

        <div class="recommended-products">

            <div class="recommended-img">
                <div class="product-info">
                    <img src="${recommended.img}" alt="${recommended.title}">
                </div>
                <p>${recommended.brand}</p>
            </div>
                <p>${recommended.price}</p>
        </div>
    `;
};

export const recommendedList = () => {
  if (recommendedProducts) {
    recommended.forEach((element) => {
      recommendedProducts.insertAdjacentHTML("beforeend", productInfoTmpl(element));
    });
  }}