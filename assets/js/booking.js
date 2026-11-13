/* =========================================================
   BOOKING FORM
   When the visitor presses "Send booking request", this turns
   their answers into a WhatsApp message to the shop.
   ========================================================= */

const form = document.querySelector("#booking-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const bikeSelect = document.querySelector("#bike-type");
  const bikeType = bikeSelect.options[bikeSelect.selectedIndex].text;
  const need = document.querySelector("#need").value;

  const message =
    "Hello Wheelhouse, I'd like to book a repair.\n" +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Bike type: ${bikeType}\n` +
    `Need: ${need}`;

  const url = "https://wa.me/233244000001?text=" + encodeURIComponent(message);
  window.location.href = url;
});
