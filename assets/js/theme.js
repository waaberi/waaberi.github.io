(() => {
  const root = document.documentElement;
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "portfolio-theme";
  let selection = "system";

  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") selection = stored;
  } catch {
    // Theme selection still works when browser storage is unavailable.
  }

  const applyTheme = () => {
    const theme = selection === "system" ? (system.matches ? "dark" : "light") : selection;
    root.dataset.theme = theme;
    const select = document.getElementById("theme-select");
    if (select) {
      select.value = selection;
      const background = getComputedStyle(root).getPropertyValue("--paper").trim();
      document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
        meta.content = background;
      });
    }
  };

  // Apply a saved choice before the page is painted.
  applyTheme();
  system.addEventListener("change", applyTheme);
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) {
      selection = event.newValue === "light" || event.newValue === "dark" ? event.newValue : "system";
      applyTheme();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("theme-select");
    if (!select) return;
    applyTheme();
    select.closest(".theme-control").hidden = false;
    select.addEventListener("change", () => {
      selection = select.value;
      try {
        if (selection === "system") localStorage.removeItem(storageKey);
        else localStorage.setItem(storageKey, selection);
      } catch {
        // Keep the in-page preference even if it cannot be saved.
      }
      applyTheme();
    });
  });
})();
