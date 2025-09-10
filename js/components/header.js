export function renderHeader() {
  const root = document.querySelector(".header-container");
  if (!root) return;

  root.innerHTML = `
    <header>
      <nav>
        <ul>
          <li><a href="index.html">Produkter</a></li>
          <li>
            <a href="favoritter.html" class="fav-link">
              <span class="heart-wrapper">
                ❤️ <span class="fav-count">0</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `;
}