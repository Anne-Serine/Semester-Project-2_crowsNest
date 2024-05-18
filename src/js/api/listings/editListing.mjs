import { load } from "../../storage/index.mjs";
import { API_ALL_LISTINGS, API_BASE, API_KEY } from "../constants.mjs";

export async function editListing(title, description, media, id) {
  let object

  if(media) {
    object = {
      title: title, description: description, media: media
    }
  } else {
    object = {
      title: title, description: description
    }
  }
  try {
    const response = await fetch(API_BASE + API_ALL_LISTINGS + `/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object),
    });
    if(response.ok) {
      console.log(response)
      return await response.json();
    } else {
      throw new Error(response.status + " Was not able to edit listing.");
    }
  } catch (error) {
    return error;
  }
}