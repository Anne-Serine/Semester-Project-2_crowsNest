import { getSingleListing } from "../../api/listings/singleListing.mjs";
import { viewBiddingHistory } from "../bidding/biddingHistory.mjs";
import { setBiddingAmount } from "../bidding/calculateBid.mjs";


export async function viewSingleListing() {
  const parameterString = window.location.search;
  const searchParameters = new URLSearchParams(parameterString);
  const id = searchParameters.get("listingId");
  if (id) {
    const product = await getSingleListing(id);
    const item = product.data
    const productCurrentBid = document.querySelector("#productCurrentBid");
    const productImage1 = document.querySelector("#productImage1");
    const productImage2 = document.querySelector("#productImage2");

    const imageElement = document.createElement("img");
    productImage1.appendChild(imageElement);
    productImage1.innerHTML = `<img src="${item.media[0] ? item.media[0].url : "/media/placeholder.jpg"}">`
    
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
  
    const productEndsAt = document.querySelector("#productEndsAt");
    const endDate = new Date(item.endsAt)
    productEndsAt.innerHTML = endDate.toLocaleDateString();
    
    const productTitle = document.querySelector("#productTitle");
    productTitle.innerHTML = item.title;
  
    const productDescription = document.querySelector("#productDescription");
    productDescription.innerHTML = item.description;
  
    viewBiddingHistory(item);
    setBiddingAmount(item);
  

  }
  
}