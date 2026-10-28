document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuPrincipal = document.getElementById("menu-principal");

  if (menuToggle && menuPrincipal) {
    menuToggle.addEventListener("click", () => {
      // Verifica o estado atual de expansão do menu
      const estaAberto = menuToggle.getAttribute("aria-expanded") === "true";

      // Altera o estado do aria-expanded
      menuToggle.setAttribute("aria-expanded", !estaAberto);
      
      // Alterna a classe que mostra/esconde o menu no CSS
      menuPrincipal.classList.toggle("nav-ativa");

      // Atualiza a descrição acessível para leitores
      menuToggle.setAttribute(
        "aria-label",
        estaAberto ? "Abrir menu de navegação" : "Fechar menu de navegação"
      );
    });
  }
});