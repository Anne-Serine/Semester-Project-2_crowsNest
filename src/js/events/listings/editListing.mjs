import { editListing } from "../../api/listings/editListing.mjs";
import { getSingleListing } from "../../api/listings/singleListing.mjs";
import { viewSingleListing } from "./singleListing.mjs";

export async function editListingEvent(id) {
  const editListingBtn = document.querySelector("#editListingBtn");
  const editListingModal = document.querySelector("#editListingModal");

  editListingBtn.addEventListener("click",async () => {
    const listing = await getSingleListing(id);

    if(listing.data) {
      const form = document.querySelectorAll("#editListingModal *");

      form.forEach(input => {
        if(input.id === "title") {
          input.value = listing.data.title;
        }
        if(input.id === "description") {
          input.value = listing.data.description;
        }
        if(input.id === "listingId") {
          input.value = id;
        }
      })
      const imageUrlInputs = document.querySelectorAll("[data-image-url]");
      for (let i = 0; i < imageUrlInputs.length; i++ ) {
        for (let j = 0; j < listing.data.media.length; j++) {
          if (i === j) {
            imageUrlInputs[i].value = listing.data.media[j].url;
          }
        }
      }
    }
    editListingModal.showModal()
  })
  const modalForm = document.querySelector("#editListingModalForm");
  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formTarget = event.target;
    const formData = new FormData(formTarget);
    const data = Object.fromEntries(formData.entries());

    const imageUrls = modalForm.querySelectorAll("[data-image-url]");
    let media = []
    imageUrls.forEach((url) => {
      if(url.value.length > 0) {
        media.push({url: url.value, alt: ""})
      }
    })
    if(data.title.length > 0) {

      editListing(data.title, data.description, media, id).then( () => {
        console.log("updated")
        viewSingleListing();
        imageUrls.forEach((input) => {
          if(input.value.length === 0) {
            input.value = "";
          }
        })
        editListingModal.close();
      });
    }
  })
}