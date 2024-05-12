 // Get the highest bid + 1 from product.data
 function minPossibleBid(product) {
  if(product.bids.length === 0) {
    return 1;
  } else {
    return Math.max(...product.bids.map(bid => bid.amount)) + 1
  }
}


// Function to increase/decrease counter and update display
export async function setBiddingAmount(item) {
  const biddingAmount = document.querySelector("#biddingAmount");
  const changeBidAmountBtns = document.querySelectorAll("[data-change-bid]")
  const placeBidBtn = document.querySelector("#placeBidBtn")
  const errorMessage = document.querySelector("#errorMessage")

  // Set initial input value and currentBid
  biddingAmount.value = minPossibleBid(item);
  biddingAmount.setAttribute("min", biddingAmount.value);
  let currentBid = biddingAmount.value;

  // Validate and change value in input with decrease/increase buttons
  changeBidAmountBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // First a check
      if(currentBid < minPossibleBid(item)) {
        currentBid = minPossibleBid(item)
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
    currentBid = biddingAmount.value

    // Do some checks
    if(currentBid < minPossibleBid(item)) {
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