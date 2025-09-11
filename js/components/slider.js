// js/components/slider.js
export async function initSlider() {
  const slider = document.querySelector('.slider');
  if (!slider) {
    console.error('❌ Ingen .slider fundet i HTML');
    return;
  }

  // Opret DOM-elementer til slider
  const img = document.createElement('img');
  img.className = 'image-in-slider';
  img.alt = 'Slider billede';

  const h1 = document.createElement('h1');
  h1.textContent =
    'Vi stræber efter at skabe en unik shoppingoplevelse, hvor elegance møder funktionalitet';

  slider.append(img, h1);

  // ==========================
  // Hent billeder fra JSON
  // ==========================
  let images = [];
  try {
    const res = await fetch('data/slider.json');
    if (!res.ok) throw new Error('Kunne ikke hente slider.json');
    const data = await res.json();

    if (data.images && data.images.length > 0) {
      images = data.images;
    } else {
      console.warn('⚠️ Ingen billeder fundet i slider.json – bruger fallback');
      images = ['img/slider/hero_img.jpg'];
    }
  } catch (err) {
    console.error('❌ Fejl ved hentning af slider.json:', err);
    // fallback hvis JSON fejler
    images = ['img/slider/hero_img.jpg'];
  }

  // ==========================
  // Slider funktionalitet
  // ==========================
  let i = 0;
  const setActive = () => {
    img.src = images[i];
  };

  setActive(); // Vis første billede
  setInterval(() => {
    i = (i + 1) % images.length;
    setActive();
  }, 5000);
}