import { createNewListing } from "../../api/listings/createNewListing.mjs";

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
      listingImage.setAttribute("src", modalImageInput.value);
      imageUrlInput.value = modalImageInput.value;
      modalImageInput.value = "";
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
        // console.log(data.title, data.endsAt, data.description, media)
        // const newListing = await createNewListing(data.title, new Date(data.endsAt), data.description, media)
        // console.log(newListing)

        // Extract parts of date
        const [year, month, day] = data.endsAtDate.split('-');
        // Extract parts of time
        const [hours, minutes] = data.endsAtTime.split(':');

        // Create new Date object
        const combinedDate = new Date(year, month - 1, day, hours, minutes);

        createNewListing(data.title, combinedDate, data.description, media).then(() => {
          const formInputs = form.querySelectorAll("[data-form-input]");
          formInputs.forEach((input) => {
            input.value = "";

          })
  
        });
      }
    })
  }
  
}