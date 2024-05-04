import { searchListings } from "../api/listings/searchListings.mjs";
import { showStatusMessage } from "../helpers/showStatusMessage.mjs";

export function searchListingsByTitleAndDescription() {
  const searchInput = document.querySelector("#searchInput");
  const searchResults = document.querySelector("#searchResults");

  if (searchInput || searchResults) {

    searchInput.addEventListener("keyup", async (e) => {
      const value = e.target.value;
      console.log(value)
      searchResults.innerHTML = "";
      if (value.length > 0) {
        searchResults.parentElement.classList.remove("hidden");
        const listings = await searchListings(value);

        if(listings.data && listings.data.length > 0) {
          for (let i = 0; i < listings.data.length; i++) {
            searchResults.innerHTML += `<li class="p-1 border-b border-b-cn-light-grey">
            <a class="text-md" href="/product/?listingId=${listings.data[i].id}">${listings.data[i].title}<p class="text-sm text-cn-dark-grey line-clamp-2">${listings.data[i].description}</p></a>
            </li>`
          }
        } else if(listings.data && listings.data.length === 0) {
          searchResults.innerHTML = `<li class="p-1">
          No results
          </li>`;
        } else {
          showStatusMessage("error", listings, "#searchAlertMessage");
        }
      } else {
        searchResults.parentElement.classList.add("hidden");
      }
    })
  }
}