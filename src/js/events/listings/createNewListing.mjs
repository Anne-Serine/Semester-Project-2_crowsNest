import { createNewListing } from "../../api/listings/createNewListing.mjs";

export async function setCreateNewListingEvent() {
  const form = document.querySelector("#createNewListingForm");

  if(form) {
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
      if(data.title.length > 0 && data.endsAt.length > 0) {
        // console.log(data.title, data.endsAt, data.description, media)
        // const newListing = await createNewListing(data.title, new Date(data.endsAt), data.description, media)
        // console.log(newListing)
        createNewListing(data.title, data.endsAt, data.description, media).then(() => {
          const formInputs = form.querySelectorAll("[data-form-input]");
          formInputs.forEach((input) => {
            input.value = "";
          })
  
        });
      }
    })
  }
  
}