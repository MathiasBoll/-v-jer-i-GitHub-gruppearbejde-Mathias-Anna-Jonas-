import { fetchContact } from "../fetch.js";

const contact = await fetchContact();
console.log(contact);

// Byg kontaktsektionen i <aside id="contact-form-id">
export const renderContact = () => {
  const container = document.getElementById("contact-form-id");
  if (!container) return;

  container.innerHTML = `
    <h2>Kontakt Os</h2>
    <form class="contact-form">
      <input type="text" id="name" name="name" placeholder="Navn" required />
      <input type="email" id="email" name="email" placeholder="Email" required />
      <textarea id="message" name="message" placeholder="Besked..." required></textarea>
      <button type="submit">Send besked</button>
    </form>
  `;

  const form = container.querySelector("form.contact-form");

  // Brug browserens indbyggede validering
  form.noValidate = false;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Hvis noget er ugyldigt, vis native fejl-popover
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Succes: vis alert som på dit screenshot
    const name = form.elements.name.value.trim();
    alert(`Tak for din tilmelding, ${name || "ven"}!`);

    form.reset();
  });
};
