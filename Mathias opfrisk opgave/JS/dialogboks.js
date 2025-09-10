const dialog = document.querySelector('.dialogBox')
const dialogImg = document.querySelector('.dialogImg')
const closeBtn = document.querySelector('.closeBtn')
const galleryImages = document.querySelectorAll(".gallery-img .openBtn");


/* Åbn dialog-box */
galleryImages.forEach((openBtn) => {
    openBtn.addEventListener('click', () => {
        dialogImg.src = openBtn.src;
        dialog.showModal();
    });
});

/* Luk dialog-box */
closeBtn.addEventListener('click', () => {
    dialog.close();
});