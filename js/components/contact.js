import { fetchContact } from "../fetch.js";

const contact = await fetchContact();
console.log(contact);
// Funktionen bygger kontaktsektionen og indsætter den i et element med klassen .contact-section
export const renderContact = () => {
  const container = document.querySelector(".contact-form");
  if (!container) return;

  container.innerHTML = `
    <h2>Kontakt Os</h2>
    <form class="contact-form">
      <input type="text" name="name" placeholder="Navn" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Besked..." required></textarea>
      <button type="submit">Send besked</button>
    </form>
  `;
};
