export function createListingCard(data) {
  const image = data.media[0];

  return `<div class="overflow-hidden rounded-bl-md rounded-br-2xl">
  <div style="height:15rem" class="overflow-hidden">
    <img src="${image ? image.url : '/media/placeholder.jpg'}" alt="" class="h-full w-full object-cover rounded-t-2xl ">
  </div>
  <div class="flex justify-between bg-cn-white py-2 px-3">
    <p class="font-bold">${data.title}</p>
    <p>${data.endsAt}</p>
  </div>
</div>`
}