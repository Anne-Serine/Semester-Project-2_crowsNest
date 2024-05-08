import { getSingleListing } from "../../api/listings/singleListing.mjs";
import { calculateMinimumBid } from "../bidding/calculateBid.mjs";


export async function viewSingleListing() {
  const parameterString = window.location.search;
  const searchParameters = new URLSearchParams(parameterString);
  const id = searchParameters.get("listingId");
  const product = await getSingleListing(id);
  const item = product.data
  const productCurrentBid = document.querySelector("#productCurrentBid");
  const biddingAmount = document.querySelector("#biddingAmount");

  const productImage1 = document.querySelector("#productImage1");
  const imageElement = document.createElement("img");
  productImage1.appendChild(imageElement);
  productImage1.innerHTML = `<img src="${item.media[0].url}">`
  
  const productImage2 = document.querySelector("#productImage2");

  for(let i = 0; i < item.media.length; i++) {
    productImage2.innerHTML += `<img src="${item.media[i].url}">`
  }
  
  const productSeller = document.querySelector("#productSeller");
  productSeller.innerHTML = item.seller.name;
  
  for(let i = 0; i < item.bids.length; i++) {
    if (i === item.bids.length -1) {
      productCurrentBid.innerHTML = `$ `+ item.bids[i].amount;
    }
  }

  for(let i = 0; i < item.bids.length; i++) {
    if (i === item.bids.length -1) {
      biddingAmount.innerHTML = `$ `+ calculateMinimumBid(item);
    }
  }

  const productEndsAt = document.querySelector("#productEndsAt");
  productEndsAt.innerHTML = item.endsAt;
  
  const productTitle = document.querySelector("#productTitle");
  productTitle.innerHTML = item.title;

  const productDescription = document.querySelector("#productDescription");
  productDescription.innerHTML = item.description;


}


// if(singleListingProductContainer) {
//   const singleListingProductContainer = document.querySelector("#singleListingProductContainer");
//   singleListingProductContainer.innerHTML = `${product.title}`;
// }
// viewSingleListingProduct.addEventListener("click", () => {
//   console.log(singleListingProductContainer)
// })