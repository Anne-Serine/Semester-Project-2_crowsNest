export function createListingCard(data) {
  const image = data.media[0];

  return `<a href="/product/?listingId=${data.id}" class="max-h-content overflow-hidden rounded-bl-md rounded-br-2xl" data="viewListingProduct">
  <div class="relative overflow-hidden h-[15rem]">
    <img src="${image ? image.url : '/media/3d-cash-money.jpg'}" alt="" class="h-full w-full object-cover rounded-t-2xl ">
    <div class="absolute line-clamp-1 p-2 right-0 top-5 bg-cn-orange rounded-l-md text-sm drop-shadow-md">Bid: ${data.bids.length > 0 ? data.bids[data.bids.length - 1].amount + " cr" : "0 cr"}</div>
  </div>
  <div class="flex justify-between bg-cn-white py-2 px-3">
    <p class="font-semibold line-clamp-1">${data.title}</p>
  </div>
</a>`
}