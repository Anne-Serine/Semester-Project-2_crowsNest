export function createListingCard(data) {
  const image = data.media[0];

  return `<a href="/product/?listingId=${data.id}" class="max-h-content overflow-hidden rounded-bl-md rounded-br-2xl" data="viewListingProduct">
  <div class="overflow-hidden h-[15rem]">
    <img src="${image ? image.url : '/media/3d-cash-money.jpg'}" alt="" class="h-full w-full object-cover rounded-t-2xl ">
  </div>
  <div class="flex justify-between bg-cn-white py-2 px-3">
    <p class="font-bold line-clamp-1">${data.title}</p>
  </div>
</a>`
}