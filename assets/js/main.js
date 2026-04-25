(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const searchInput = document.querySelector("#dossier-search");
  const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
  const dossierCards = Array.from(document.querySelectorAll(".dossier-card"));
  const resultCount = document.querySelector("#result-count");
  const emptyState = document.querySelector("#empty-state");
  const filterLinks = Array.from(document.querySelectorAll("[data-filter-link]"));

  let activeFilter = "all";

  function normalize(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function updateLibrary() {
    const query = normalize(searchInput ? searchInput.value : "");
    let visibleCount = 0;

    dossierCards.forEach((card) => {
      const category = card.dataset.category || "";
      const haystack = normalize(`${card.dataset.title || ""} ${card.textContent || ""} ${category}`);
      const matchesFilter = activeFilter === "all" || category.includes(activeFilter);
      const matchesSearch = !query || haystack.includes(query);
      const isVisible = matchesFilter && matchesSearch;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (resultCount) {
      resultCount.textContent = `${visibleCount} dossier${visibleCount > 1 ? "s" : ""} affiché${visibleCount > 1 ? "s" : ""}`;
    }

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  }

  function setFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    updateLibrary();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const willOpen = !navLinks.classList.contains("open");
      navLinks.classList.toggle("open", willOpen);
      navToggle.setAttribute("aria-expanded", String(willOpen));
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter || "all"));
  });

  filterLinks.forEach((link) => {
    link.addEventListener("click", () => setFilter(link.dataset.filterLink || "all"));
  });

  if (searchInput) {
    searchInput.addEventListener("input", updateLibrary);
  }

  setFilter("all");
})();
