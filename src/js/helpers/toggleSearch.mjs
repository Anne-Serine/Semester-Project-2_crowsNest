export function toggleSearch() {
  const searchBtn = document.querySelector("#searchBtn");

  if (searchBtn) {
    const searchInput = document.querySelector("#searchContainer");
    
    searchBtn.addEventListener("click", () => {
      searchInput.classList.toggle("hidden");
    })
  }
}