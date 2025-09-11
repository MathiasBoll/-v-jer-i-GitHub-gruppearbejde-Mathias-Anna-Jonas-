import { fetchGallery } from "../fetch.js";

const outputGallery = document.querySelector(".gallery");

let gallery = await fetchGallery()

const galleryTmpl = (gallery) => {
  return `
    <div class="gallery-img">
        <img src="${gallery.image}" alt="gallery image">
    </div>`;
};

export const galleryList = () => {
    if (gallery) {
        gallery.forEach((img) => {
            outputGallery.insertAdjacentHTML('beforeend', galleryTmpl(img));
        });
    }

    // ==========================
    // TILFØJET: Dialog-boks
    // ==========================
    const dialog = document.createElement("dialog");
    dialog.className = "dialogBox";
    dialog.innerHTML = `
      <div class="dialog-content">
        <img class="dialogImg" src="" alt="">
        <button class="closeBtn">Luk</button>
      </div>
    `;
    document.body.appendChild(dialog);

    const dialogImg = dialog.querySelector(".dialogImg");
    const closeBtn = dialog.querySelector(".closeBtn");

    // Åbn dialog når man klikker på et billede
    outputGallery.addEventListener("click", (e) => {
        const img = e.target.closest(".gallery-img img");
        if (!img) return;
        dialogImg.src = img.src;
        dialogImg.alt = img.alt;
        dialog.showModal();
    });

    // Luk dialog (knap)
    closeBtn.addEventListener("click", () => dialog.close());

    // Luk dialog (klik udenfor)
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) dialog.close();
    });

    // Luk dialog (Escape)
    dialog.addEventListener("keydown", (e) => {
        if (e.key === "Escape") dialog.close();
    });
}