export function toggleNav() {
  const navMenuBtn = document.querySelector("#navMenuBtn");
  
  if (navMenuBtn) {
    const navMenu = document.querySelector("#nav");

    navMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    })
  }
}