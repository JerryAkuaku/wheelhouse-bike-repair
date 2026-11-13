/* =========================================================
   BOOKING FORM
   When the visitor presses "Send booking request", this turns
   their answers into a WhatsApp message to the shop.
   ========================================================= */

const form = document.querySelector("#booking-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameField = document.querySelector("#name");
    const phoneField = document.querySelector("#phone");
    const bikeSelect = document.querySelector("#bike-type");
    const needField = document.querySelector("#need");

    // "required" accepts a field that holds only spaces, so trim first
    // and treat a blank answer as empty.
    const textFields = [nameField, phoneField, needField];
    for (const field of textFields) {
      field.value = field.value.trim();
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const bikeType = bikeSelect.options[bikeSelect.selectedIndex].text;

    const message =
      "Hello Wheelhouse, I'd like to book a repair.\n" +
      `Name: ${nameField.value}\n` +
      `Phone: ${phoneField.value}\n` +
      `Bike type: ${bikeType}\n` +
      `Need: ${needField.value}`;

    const url =
      "https://wa.me/233244000001?text=" + encodeURIComponent(message);
    window.location.href = url;
  });
}
