export function logoutUser() {
  const logoutBtn = document.querySelectorAll(".logout-btn");

  if(logoutBtn) {
    logoutBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
      })
    })
  }
}