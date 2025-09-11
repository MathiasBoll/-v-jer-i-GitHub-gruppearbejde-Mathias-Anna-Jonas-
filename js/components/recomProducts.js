import { fetchRecommended } from "../fetch.js";

const recommended = await fetchRecommended();
console.log(recommended); 

const recommendedProducts = document.querySelector(".recommended-products");


const recommendedTmpl = (img) => {
    return `
    <div class="recommended-img">
        <img src="${img}" alt="recommended image">
    </div>
    `;
}

export const recommendedGallery = () => {
    if (recommendedProducts) {
        recommendedProducts.forEach(img => {
            recommendedProducts.insertAdjacentHtml("beforeend", recommendedTmpl(img))
        });
    }
}

const productInfo = document.querySelector('#recommended-products-id')


