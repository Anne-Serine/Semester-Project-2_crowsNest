export function showStatusMessage(alertType, message, id, autoHide) {
  const statusMessage = document.querySelector(id);

  statusMessage.classList.add(alertType);
  statusMessage.classList.remove("hidden");
  statusMessage.innerHTML = message;
  if (autoHide) {
    setTimeout(() => {
      statusMessage.classList.add("hidden");
    }, 4000)
  }
}