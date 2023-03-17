const emailButton = document.getElementById("email-button");
const email = "example@gmail.com"; // Replace with the email address you want to send to
emailButton.addEventListener("click", () => {
  window.location.href = `mailto:${email}`;
});

const chatButton = document.getElementById("chat-button");
const whatsappNumber = "085753344206"; // Replace with the WhatsApp number you want to redirect to
chatButton.addEventListener("click", () => {
  window.location.href = `https://wa.me/${whatsappNumber}`;
});