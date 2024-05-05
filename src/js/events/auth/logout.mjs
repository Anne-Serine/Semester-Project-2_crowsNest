export function logoutUser() {
  const logoutBtn = document.querySelector("#logoutBtn");

  if(logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
    })
  }
}