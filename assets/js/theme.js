(() => {
  const root = document.documentElement;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "portfolio-theme";
  let selection = null;

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") selection = stored;
  } catch {
    // The toggle still works when browser storage is unavailable.
  }

  const applyTheme = () => {
    const theme = selection || (system.matches ? "dark" : "light");
    root.dataset.theme = theme;
    const toggle = document.getElementById("theme-toggle");
    if (toggle) toggle.setAttribute("aria-pressed", String(theme === "dark"));
  };

  // Apply a saved choice before the page is painted.
  applyTheme();
  system.addEventListener("change", applyTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;
    applyTheme();
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      selection = root.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(storageKey, selection);
      } catch {
        // Keep the in-page preference even if it cannot be saved.
      }
      applyTheme();
    });
  });
})();
