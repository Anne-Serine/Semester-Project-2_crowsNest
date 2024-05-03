export function createListingCard(data) {
  const image = data.media[0];

  return `<a href="/product/?listingId=${data.id}" class="max-h-content overflow-hidden rounded-bl-md rounded-br-2xl">
  <div style="height:15rem" class="overflow-hidden">
    <img src="${image ? image.url : '/media/placeholder.jpg'}" alt="" class="h-full w-full object-cover rounded-t-2xl ">
  </div>
  <div class="flex justify-between bg-cn-white py-2 px-3">
    <p class="font-bold line-clamp-1">${data.title}</p>
  </div>
</a>`
}