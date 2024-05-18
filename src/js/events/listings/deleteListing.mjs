import { deleteListing } from "../../api/listings/deleteListing.mjs";
import { showStatusMessage } from "../../helpers/showStatusMessage.mjs";


export async function deleteListingEvent() {
  const deleteListingBtn = document.querySelector("#deleteListingBtn");

  deleteListingBtn.addEventListener("click", async (e) => {
      const listingId = e.target.dataset.deleteListingId;
      const deleteListingResponse = await deleteListing(listingId);

      if(deleteListingResponse.ok) {
        const message = "The listing was successfully deleted."
        // const listingDetails = document.querySelector("#listingDetails");

        // listingDetails.innerHTML = `<div class="text-center my-5 text-lg text-green-500">
        // ${message}
        // </div>`
        showStatusMessage("alert-success", message, "#listingDetails")
      } else {
        showStatusMessage("alert-danger", deleteListingResponse + " - Could not delete the listing", "#listingDetails")
      }
    })
}