// ==========================
// IMPORT AF KOMPONENTER
// ==========================
import { initHeader } from './components/header.js';
import { initSlider } from './components/slider.js';
import { galleryList } from './components/gallery.js';
import { productList } from './components/productGroups.js';
import { recommendedList} from './components/recomProducts.js';
import { renderContact } from './components/contact.js';

// ==========================
// DEBUG LOG
// ==========================
console.log('[index] loaded');

// ==========================
// INITIALISERING
// ==========================
initHeader();   // Bygger topbar + navigation
initSlider();   // Fylder slideren med billeder + overskrift
galleryList();  // Kører galleri-komponenten
productList();
recommendedList()
renderContact()