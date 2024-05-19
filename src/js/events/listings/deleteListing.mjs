import { deleteListing } from "../../api/listings/deleteListing.mjs";
import { showStatusMessage } from "../../helpers/showStatusMessage.mjs";


export async function deleteListingEvent() {
  const deleteListingBtn = document.querySelector("#deleteListingBtn");

  deleteListingBtn.addEventListener("click", async (e) => {
    const listingId = e.target.dataset.deleteListingId;
    const deleteListingResponse = await deleteListing(listingId);
    
    if(deleteListingResponse.ok) {
        const message = "The listing was successfully deleted."
      
        const deletedListingMessage = `<div class="mx-auto max-w-[95vw] text-center my-5 text-lg text-green-700 bg-cn-white p-5 rounded-3xl">
        ${message}
          <div class="flex justify-center mt-3 flex-wrap items-center gap-2">
            <a href="/profile/" class="btn">Profile page</a>
            <a href="/" class="btn">Seek treasures</a>
          </div>
        </div>`
        showStatusMessage("success", deletedListingMessage, "#listingDetails")
      } else {
        showStatusMessage("error", deleteListingResponse + " - Could not delete the listing", "#listingDetails")
      }
    })
}