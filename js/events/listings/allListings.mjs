import { getAllListings } from "../../api/listings/allListings.mjs";
import { createListingCard } from "../../templates/listingCard.mjs";

export async function listingsContainer() {
  const allListingsContainer = document.querySelector("#allListingsContainer");

  if (allListingsContainer) {
    const data = await getAllListings();
    console.log(data)
    data.data.forEach(element => {
      allListingsContainer.innerHTML += createListingCard(element);
    });
  }
}