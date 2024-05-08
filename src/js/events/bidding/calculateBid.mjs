import { getSingleListing } from "../../api/listings/singleListing.mjs";

export function calculateMinimumBid(item) {
  // Get the current highest bid amount
  const currentHighestBid = Math.max(...item.bids.map(bid => bid.amount));
  // Calculate the minimum bid (at least one more than the current highest bid)
  const minimumBid = currentHighestBid + 1;

  return minimumBid;
}



// Function to increase counter and update display
export async function increaseCounter() {
  const parameterString = window.location.search;
  const searchParameters = new URLSearchParams(parameterString);
  const id = searchParameters.get("listingId");
  const product = await getSingleListing(id);
  const item = product.data
  const plusBtn = document.querySelector("#plusBtn");
  const biddingAmount = document.querySelector("#biddingAmount");
  
  for(let i = 0; i < item.bids.length; i++) {
    let counter = item.bids[i].amount;
    if (i === item.bids.length -1) {
      biddingAmount.innerHTML = `$ `+ item.bids[i].amount;
    }
    plusBtn.addEventListener("click", () => {
      calculateMinimumBid(item)
      counter++;
      biddingAmount.innerHTML = `$ `+ counter;
      console.log(counter)
    })
  }
  
}

