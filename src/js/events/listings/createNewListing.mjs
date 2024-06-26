import { createNewListing } from "../../api/listings/createNewListing.mjs";
import { showStatusMessage } from "../../helpers/showStatusMessage.mjs";

export async function setCreateNewListingEvent() {
  const form = document.querySelector("#createNewListingForm");

  if(form) {
    const listingImages = form.querySelectorAll("[data-image]");
    const addImageModal = form.querySelector("#addImageModal");
    const addImageBtn = addImageModal.querySelector("#addImageBtn");
    listingImages.forEach((image) => {
      image.addEventListener("click", (e) => {
        addImageBtn.value = e.target.dataset.image;
        addImageModal.showModal();
      })
    })
    addImageBtn.addEventListener("click", (e) => {
      const imageUrlInput = form.querySelector(`[data-image-url="${e.target.value}"]`);
      const modalImageInput = addImageModal.querySelector("#image");
      const listingImage = form.querySelector(`[data-image="${e.target.value}"]`);
      if (modalImageInput.value.length > 0) {
        listingImage.setAttribute("src", modalImageInput.value);
        imageUrlInput.value = modalImageInput.value;
        modalImageInput.value = "";
      }
      addImageModal.close();
    })

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formTarget = event.target;
      const formData = new FormData(formTarget);
      const data = Object.fromEntries(formData.entries());

      const imageUrls = form.querySelectorAll("[data-image-url]");
      let media = []
      imageUrls.forEach((url) => {
        if(url.value.length > 0) {
          media.push({url: url.value, alt: ""})
        }
      })
      if(data.title.length > 0 && data.endsAtDate.length > 0) {
        const [year, month, day] = data.endsAtDate.split('-');
        const [hours, minutes] = data.endsAtTime.split(':');
        const combinedDate = new Date(year, month - 1, day, hours, minutes);

        createNewListing(data.title, combinedDate, data.description, media).then(() => {
          const formInputs = form.querySelectorAll("[data-form-input]");
          formInputs.forEach((input) => {
            input.value = "";
          })
          listingImages.forEach((image) => {
            image.setAttribute("src", "/media/placeholder.jpg")
          })
          showStatusMessage("success", "Listing created successfully!", "#createListingStatus", true)
        });
      }
    })
  }
  
}