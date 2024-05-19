import { getSingleListing } from "../../api/listings/singleListing.mjs";
import { load } from "../../storage/index.mjs";
import { viewBiddingHistory } from "../bidding/biddingHistory.mjs";
import { setBiddingAmount } from "../bidding/calculateBid.mjs";
import { deleteListingEvent } from "./deleteListing.mjs";
import { initCountdown } from "../../helpers/countDown.mjs";
import { editListingEvent } from "./editListing.mjs";


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
    const deleteListingBtn = document.querySelector("#deleteListingBtn");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", item.media[0] ? item.media[0].url : "/media/3d-cash-money.jpg");
    imageElement.classList.add("w-full");
    productImage1.innerHTML = "";
    productImage2.innerHTML = "";
    productImage1.appendChild(imageElement);
    
    for(let i = 0; i < item.media.length; i++) {
      productImage2.innerHTML += `<div class="relative max-h-[10rem] overflow-hidden rounded-xl md:rounded-3xl flex items-center">
      <img src="${item.media[i].url}" class="object-cover w-full h-full">
      </div>`
    }
    const thumbnails = document.querySelectorAll("#productImage2 img");
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", (e) => {
        productImage1.innerHTML = "";
        const imageUrl = e.target.getAttribute("src");
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", imageUrl);
        imageElement.classList.add("w-full");
        productImage1.appendChild(imageElement);
      })
    })
    const productSeller = document.querySelector("#productSeller");
    productSeller.innerHTML = item.seller.name;
    
    for(let i = 0; i < item.bids.length; i++) {
      if (i === item.bids.length -1) {
        productCurrentBid.innerHTML = item.bids[i].amount + `<span class="text-lg"> credits</span>`;
      } 
    }
    if (item.bids.length === 0) {
      productCurrentBid.innerHTML = `<span class="text-lg text-red-600"> No bids yet</span>`
    }

    const productEndsAt = document.querySelector("#productEndsAt");
    const endDate = new Date(item.endsAt)
    productEndsAt.innerHTML = endDate.toLocaleString();
    initCountdown(endDate);
    
    const productTitle = document.querySelector("#productTitle");
    productTitle.innerHTML = item.title;
  
    const productDescription = document.querySelector("#productDescription");
    productDescription.innerHTML = item.description;

    deleteListingBtn.setAttribute("data-delete-listing-id", id);

    const seller = item.seller.name;
    const profile = load("profile");
    let profileName;
    if (profile !== null) {
      profileName = profile.name;
    }
    const actionButtons = document.querySelectorAll(".action-btn");
    const placeBidContainer = document.querySelector("#placeBidContainer");
    const now = new Date().getTime();
    const distance = endDate - now;
    const loginToPlaceBidContainer = document.querySelector("#loginToPlaceBidContainer")

    if(seller === profileName) {
      actionButtons.forEach((btn) => {
        btn.classList.remove("hidden");
      })
      placeBidContainer.classList.add("hidden");
    } else if (!profileName) {
      placeBidContainer.classList.add("hidden");
      loginToPlaceBidContainer.innerHTML = `<div class="py-10">
      <p>You need to <a href="/login/" class="font-semibold underline">login</a> to bid on the item</p>
      </div>`
    } else if (distance < 0) {
      placeBidContainer.classList.add("hidden");
    } 
  
    viewBiddingHistory(item);
    setBiddingAmount(item);
    deleteListingEvent();
    editListingEvent(id);
  }
  
}

