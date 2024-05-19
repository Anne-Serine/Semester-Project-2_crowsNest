import { registerUser } from "../../api/auth/register.mjs";
import { showStatusMessage } from "../../helpers/showStatusMessage.mjs";
import { save } from "../../storage/index.mjs";

export async function setRegisterFormListener() {
  const registerForm = document.querySelector("#registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      registerUser(profile.name, profile.email, profile.password).then((user) => {
        if (user.data) {
          save("registeredUser", true)
          window.location.href = "/login/";
        } else {
          showStatusMessage("error", user, "#registerAlertMessage")
        }
      })
    })
  }
}