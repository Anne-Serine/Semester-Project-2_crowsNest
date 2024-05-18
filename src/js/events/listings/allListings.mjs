import { API_ALL_LISTINGS, API_BASE } from "../../api/constants.mjs";
import { getAllListings } from "../../api/listings/allListings.mjs";
import { createListingCard } from "../../templates/listingCard.mjs";


let page = 0;

export async function viewAllListings(listingPage) {
  page = listingPage;
  let limit = 12;
  
  const allListingsContainer = document.querySelector("#allListingsContainer");
  
  if(allListingsContainer) {
    // loadingIndicator
    
    const url = API_BASE + API_ALL_LISTINGS + `?page=${page}&limit=${limit}&sort=created`;
    console.log(url)
    const listings = await getAllListings(url);
    console.log(listings)

    if(!listings) {
      allListingsContainer.innerHTML = "<div> Oops! Looks like we've reached the end of the treasure map! In the meantime, feel free to grab a snack, and stretch those bidding muscles!  </div>"
    } else if (listings.data.length > 0) {
      listings.data.forEach(element => {
        allListingsContainer.innerHTML += createListingCard(element);
      });
    }
  }
}

const loadMoreListingsBtn = document.querySelector("#loadMoreListingsBtn");

if (loadMoreListingsBtn) {
  loadMoreListingsBtn.addEventListener("click", () => {
    page = page + 1;
    viewAllListings(page);
  })
}