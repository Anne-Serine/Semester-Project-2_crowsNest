export async function viewBiddingHistory(item) {
  const container = document.querySelector("#biddingHistoryContainer");
  container.innerHTML = "";

  for (let i = item.bids.length - 1; i >= 0; i--) {
    const createdDate = new Date(item.bids[i].created)
    container.innerHTML += `<div class="bg-cn-white rounded-bl-md rounded-3xl p-3 flex gap-4 w-72 md:w-96 items-center flex-shrink-0">
              <img
                src="${item.bids[i].bidder.avatar.url}"
                class="border rounded-full size-16 object-cover"
                alt=""
              />
              <div class="flex flex-col md:flex-row w-full md:justify-between md:items-center">
                <div>
                  <h3 class="leading-none">${item.bids[i].bidder.name}</h3>
                  <p class="text-sm">${createdDate.toLocaleString()}</p>
                </div>
                <p class="text-xl font-bold">$ ${item.bids[i].amount}</p>
              </div>
        </div>`;
  }
}
