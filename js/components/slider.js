export function initSlider() {
  window.addEventListener('DOMContentLoaded', () => {
    console.log('[slider] DOM ready');

    const slider = document.querySelector('.slider');
    if (!slider) return console.error('Mangler .slider');

    const img = document.createElement('img');
    img.className = 'image-in-slider';
    img.alt = 'Slider image';
    slider.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = 'Velkommen til min side';
    slider.appendChild(h1);

    // ← KORREKT PLACERING I DIT PROJEKT
    const images = [
      'img/slider/hero_img.jpg',
      'img/slider/hero_img2.jpg',
      'img/slider/hero_img3.jpg',
    ];

    let i = 0;
    const setActive = () => { console.log('Loader:', images[i]); img.src = images[i]; };

    img.onload = () => console.log('✅', img.src);
    img.onerror = () => console.error('❌ 404/fejl:', img.src);

    setActive();
    setInterval(() => { i = (i + 1) % images.length; setActive(); }, 5000);
  });
}