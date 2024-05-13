import { getSingleProfile } from "../../api/profile/singleProfile.mjs";

export async function viewSingleProfile() {
  const profile = await getSingleProfile();
  const user = profile.data;
  
  if(user) {
    const userName = document.querySelector("#userName");
    const userAvatar = document.querySelector("#userAvatar");
    const credits = document.querySelectorAll(".credit");

    credits.forEach((credit) => {
      credit.innerHTML = user.credits
    })

    if(userName && userAvatar) {
      console.log(user);
      userName.innerHTML = user.name;
      userAvatar.setAttribute("src", user.avatar.url);
      userAvatar.setAttribute("alt", user.avatar.alt);
    }

  }

}