import { getSingleListing } from "../../api/listings/singleListing.mjs";

export async function viewBiddingHistory() {
  const parameterString = window.location.search;
  const searchParameters = new URLSearchParams(parameterString);
  const id = searchParameters.get("listingId");
  const product = await getSingleListing(id);
  const item = product.data;
  const container = document.querySelector("#biddingHistoryContainer");

  for (let i = item.bids.length - 1; i >= 0; i--) {
    container.innerHTML += `<div class="bg-cn-white rounded-bl-md rounded-3xl p-3 flex gap-4 w-72 md:w-96 items-center flex-shrink-0">
              <img
                src="${item.bids[i].bidder.avatar.url}"
                class="border rounded-full size-16 object-cover"
                alt=""
              />
              <div class="flex flex-col md:flex-row w-full md:justify-between md:items-center">
                <div>
                  <h3 class="leading-none">${item.bids[i].bidder.name}</h3>
                  <p class="text-sm">${item.bids[i].created}</p>
                </div>
                <p class="text-xl font-bold">$ ${item.bids[i].amount}</p>
              </div>
        </div>`;
  }
}
