import { getProfileListings } from "../../api/listings/getProfileListings.mjs";
import { getSingleProfile } from "../../api/profile/singleProfile.mjs";
import { createListingCard } from "../../templates/listingCard.mjs";
import { updateSingleProfile } from "./updateSingleProfile.mjs";


export async function viewSingleProfile() {
  const profile = await getSingleProfile();
  const user = profile.data;
  
  if (user) {
    const userName = document.querySelector("#userName");
    const userAvatar = document.querySelector("#userAvatar");
    const credits = document.querySelectorAll(".credit");

    credits.forEach((credit) => {
      credit.innerHTML = user.credits
    })

    if(userName && userAvatar) {
      userName.innerHTML = user.name;
      userAvatar.setAttribute("src", user.avatar.url);
      userAvatar.setAttribute("alt", user.avatar.alt);
    }
    const bioText = document.querySelector("#bioText");
    if (bioText && user.bio.length > 0) {
      bioText.innerHTML = user.bio;
    }

    updateSingleProfile(userAvatar, user.avatar.url);

    const profileListingsContainer = document.querySelector("#profileListingsContainer");

    if (profileListingsContainer) {
      const data = await getProfileListings(user.name);
      console.log(data)
      data.data.forEach(element => {
        profileListingsContainer.innerHTML += createListingCard(element);
      });
    }
  }
}

  








// export function openUpdateAvatarModal(user) {
//   const updateAvatarModalBtn = document.querySelector("#updateAvatar");
//   const updateAvatarModal = document.querySelector("#updateAvatarModal");
//   const updateAvatarInput = document.querySelector("#updateAvatarInput")

//   if(updateAvatarModalBtn) {
//     updateAvatarModalBtn.addEventListener("click", () => {
//       updateAvatarModal.showModal();
//       if(updateAvatarInput) {
//         updateAvatarInput.addEventListener("submit", async () => {
//           const formData = new FormData();
//           formData.append("scr", user.avatar.url);
    
//           try {
//             const response = await fetch(API_BASE + API_SINGLE_PROFILE + `/${user.name}` + API_SINGLE_PROFILE_PARAMS, {
//               method: "PUT",
//               body: JSON.stringify(user),
//               headers: {
//                 Authorization: `Bearer ${load("token")}`,
//                 "X-Noroff-API-Key": API_KEY,
//                 "Content-Type": "application/json"
//               },
//             });
//             if (response.ok) {
//               return await response.json();
//             }
//           } catch(error) {
//             return error;
//           }
//         })
//       }
//     });
//   }


// }

