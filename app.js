// PWA registration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// Make sure DOM is loaded before we query elements
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("[data-menu-button]");
  const panel = document.querySelector("[data-menu-panel]");

  if (!btn || !panel) return;

  function openMenu() {
    panel.classList.add("isOpen");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    panel.classList.remove("isOpen");
    btn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = panel.classList.contains("isOpen");
    isOpen ? closeMenu() : openMenu();
  }

  // Toggle on hamburger click
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevents instant close
    toggleMenu();
  });

  // Click inside menu should not close it
  panel.addEventListener("click", (e) => e.stopPropagation());

  // Click outside closes
  document.addEventListener("click", () => closeMenu());

  // ESC closes (nice UX)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
