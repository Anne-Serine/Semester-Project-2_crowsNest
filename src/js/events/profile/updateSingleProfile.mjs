import { updateProfile } from "../../api/profile/updateProfile.mjs";
import { showStatusMessage } from "../../helpers/showStatusMessage.mjs";

export async function updateSingleProfile(userAvatar, avatarUrl) {
  const updateAvatarModalBtn = document.querySelector("#updateAvatar");
  const updateAvatarModal = document.querySelector("#updateAvatarModal");

  
  if(updateAvatarModalBtn && updateAvatarModal) {
    updateAvatarModalBtn.addEventListener("click", () => {
      updateAvatarModal.showModal();
    });
    const updateAvatarInput = updateAvatarModal.querySelector("#updateAvatarInput");
    const updateAvatarBio = updateAvatarModal.querySelector("#bio");
    const profileForm = updateAvatarModal.querySelector("#updateProfileForm");
    const closeEditProfileBtn = updateAvatarModal.querySelector("#closeEditProfileBtn");
    closeEditProfileBtn.addEventListener("click", () => {
      updateAvatarModal.close();
    })
    updateAvatarInput.value = avatarUrl;

    profileForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const profile = await updateProfile({
        bio: updateAvatarBio.value,
        avatar: {
          url: updateAvatarInput.value,
          alt: ""
        }
      });
      if (profile) {
      const user = profile.data;
        userAvatar.setAttribute("src", user.avatar.url);
        userAvatar.setAttribute("alt", user.avatar.alt);
  
        const bioText = document.querySelector("#bioText");
        if (user.bio && user.bio.length > 0) {
          bioText.innerHTML = user.bio;
        } else {
          bioText.innerHTML = "Your bio will show here"
        }
  
        updateAvatarModal.close();
      } else {
        showStatusMessage("error", "Must be a publicly available image url", "#editProfileStatusMessage" )
      }
    })

  }
}