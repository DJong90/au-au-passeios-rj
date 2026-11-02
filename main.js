// Adicione o número comercial com DDI e DDD, somente dígitos. Ex.: 5521999999999
const WHATSAPP_NUMBER = "5521979815057";
const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Au Au Passeios RJ e quero saber sobre passeios para o meu cão em Copacabana.";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("open", open);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
}));

let toastTimer;
const toast = document.getElementById("toast");
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  if (/^\d{12,13}$/.test(WHATSAPP_NUMBER)) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  link.addEventListener("click", (event) => {
    if (/^\d{12,13}$/.test(WHATSAPP_NUMBER)) {
      link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      return;
    }
    event.preventDefault();
    toast.textContent = "O botão está pronto. Para receber mensagens, adicione seu número de WhatsApp no início do arquivo main.js.";
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 5000);
  });
});
