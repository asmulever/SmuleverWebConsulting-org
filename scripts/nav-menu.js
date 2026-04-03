const headerNode = document.querySelector(".site-header");
const toggleNode = document.querySelector(".nav-toggle");
const navNode = document.querySelector(".site-nav");

if (headerNode && toggleNode && navNode) {
  const isDesktop = () => window.innerWidth >= 992;

  const syncNavVisibility = () => {
    if (isDesktop()) {
      navNode.hidden = false;
      navNode.setAttribute("aria-hidden", "false");
      return;
    }
    const isOpen = headerNode.classList.contains("nav-open");
    navNode.hidden = !isOpen;
    navNode.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };

  const closeMenu = () => {
    headerNode.classList.remove("nav-open");
    toggleNode.setAttribute("aria-expanded", "false");
    toggleNode.setAttribute("aria-label", "Abrir menu");
    syncNavVisibility();
  };

  const openMenu = () => {
    headerNode.classList.add("nav-open");
    toggleNode.setAttribute("aria-expanded", "true");
    toggleNode.setAttribute("aria-label", "Cerrar menu");
    syncNavVisibility();
  };

  toggleNode.addEventListener("click", () => {
    const isOpen = headerNode.classList.contains("nav-open");
    if (isOpen) {
      closeMenu();
      return;
    }
    openMenu();
  });

  navNode.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("click", (event) => {
    if (isDesktop()) {
      return;
    }
    if (!headerNode.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggleNode.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      closeMenu();
    }
    syncNavVisibility();
  });

  closeMenu();
}
