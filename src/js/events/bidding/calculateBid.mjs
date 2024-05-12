import { getSingleListing } from "../../api/listings/singleListing.mjs";


 // Get the highest bid + 1 from product.data
 export function minPossibleBid(product) {
  if(product.bids.length === 0) {
    return 1;
  } else {
    return Math.max(...product.bids.map(bid => bid.amount)) + 1
  }
}

const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const id = searchParameters.get("listingId");
const product = await getSingleListing(id);
const biddingAmount = document.querySelector("#biddingAmount");
const item = product.data
const changeBidAmountBtns = document.querySelectorAll("[data-change-bid]")
const placeBidBtn = document.querySelector("#placeBidBtn")
const errorMessage = document.querySelector("#errorMessage")

// Function to increase/decrease counter and update display
export async function setBiddingAmount() {

  // Set initial input value and currentBid
  biddingAmount.value = minPossibleBid(item)
  let currentBid = minPossibleBid(item)

  // Validate and change value in input with decrease/increase buttons
  changeBidAmountBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // First a check
      if(isNaN(currentBid) || currentBid < minPossibleBid(item)) {
        return
      } else if(currentBid > minPossibleBid(item) && e.target.dataset.changeBid === "decrease") {
        currentBid--
      } else if (currentBid >= minPossibleBid(item) && e.target.dataset.changeBid === "increase") {
        currentBid++
      }

      // All should be good! Set input value, clear error message and enable submit button
      biddingAmount.value = currentBid
      errorMessage.innerHTML = ''
      placeBidBtn.disabled = false
    })
  })

  // Validate and set the current bid when typing something in input
  biddingAmount.addEventListener("input", () => {
    errorMessage.innerHTML = ''
    currentBid = +biddingAmount.value

    // Do some checks
    if(isNaN(currentBid) || currentBid < minPossibleBid(item)) {
      // Show error message if not a number
      placeBidBtn.disabled = true
      errorMessage.innerHTML = "Not a valid bid amount"
      return
    }

    // All should be good, enable the submit button
    placeBidBtn.disabled = false
  })

  // Submit the bid value in input
  placeBidBtn.addEventListener("click", () => {
    // The value should be good by now and can be posted
    console.log(currentBid)
  })
}