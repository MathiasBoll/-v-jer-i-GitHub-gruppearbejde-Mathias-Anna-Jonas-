// js/components/slider.js
export function initSlider() {
  const slider = document.querySelector('.slider');
  if (!slider) {
    console.error('❌ Ingen .slider fundet i HTML');
    return;
  }

  const img = document.createElement('img');
  img.className = 'image-in-slider';
  img.alt = 'Slider billede';

  const h1 = document.createElement('h1');
  h1.textContent =
    'Vi stræber efter at skabe en unik shoppingoplevelse, hvor elegance møder funktionalitet';

  slider.append(img, h1);

  const images = [
    'img/slider/hero_img.jpg',
    'img/slider/hero_img2.jpg',
    'img/slider/hero_img3.jpg',
  ];

  let i = 0;
  const setActive = () => {
    img.src = images[i];
  };

  setActive();
  setInterval(() => {
    i = (i + 1) % images.length;
    setActive();
  }, 5000);
}