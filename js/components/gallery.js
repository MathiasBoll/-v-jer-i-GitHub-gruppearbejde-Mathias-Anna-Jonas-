const outputGallery = document.querySelector(".gallery");

let gallery = [
    "assets/img/gallery/galleri1.jpeg",
    "assets/img/gallery/galleri2.jpeg",
    "assets/img/gallery/galleri3.jpeg",
    "assets/img/gallery/galleri4.jpg",
    "assets/img/gallery/galleri5.jpeg",
    "assets/img/gallery/galleri6.jpeg"
]

const galleryTmpl = (img) => {
    return `
    <div class="gallery-img">
        <img src="${img}" alt="gallery image">
    </div>`;
}

export const galleryList = () => {
    if(gallery) {
        gallery.forEach((img) => {
  outputGallery.insertAdjacentHTML('beforeend', galleryTmpl(img));
});
    }
}
