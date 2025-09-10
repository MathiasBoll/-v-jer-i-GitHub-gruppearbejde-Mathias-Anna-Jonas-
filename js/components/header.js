// js/components/header.js
export function initHeader() {
  window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.Header');
    if (!header) {
      console.error('❌ Ingen <header class="Header"> fundet i HTML');
      return;
    }

    // Topbar
    const topbar = document.createElement('div');
    topbar.className = 'topbar';
    topbar.innerHTML = `
      <div class="topbar-icon">
        <img src="assets/icons/truck-solid.svg" alt="Levering ikon">
      </div>
      <p class="topbar-p">Bestiller du nu, vil din ordre blive sendt i dag</p>
    `;
    header.appendChild(topbar);

    // Navigation
    const nav = document.createElement('nav');
    nav.className = 'header-nav';
    nav.innerHTML = `
      <div class="burger-btn" id="burger-btn">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <ul class="nav-list" id="nav-list">
        <li class="nav-item"><a href="#product-groups-id" class="nav-link">Vores Produktgrupper</a></li>
        <li class="nav-item"><a href="#recommended-products-id" class="nav-link">Vi Anbefaler</a></li>
        <li class="nav-item"><a href="#contact-form-id" class="nav-link">Kontakt Os</a></li>
      </ul>
    `;
    header.appendChild(nav);

    // Burger funktionalitet
    const burger = nav.querySelector('#burger-btn');
    const navList = nav.querySelector('#nav-list');

    burger.addEventListener('click', () => {
      navList.classList.toggle('show');
      burger.querySelectorAll('.bar').forEach(bar => bar.classList.toggle('active'));
    });
  });
}