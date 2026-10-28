/* jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuPrincipal = document.getElementById("menu-principal");

  if (menuToggle && menuPrincipal) {
    menuToggle.addEventListener("click", () => {
      const estaAberto = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", !estaAberto);
      menuPrincipal.classList.toggle("nav-ativa");

      menuToggle.setAttribute(
        "aria-label",
        estaAberto ? "Abrir menu de navegação" : "Fechar menu de navegação"
      );
    });
  }
});