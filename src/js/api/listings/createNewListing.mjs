import { load } from "../../storage/index.mjs";
import { API_ALL_LISTINGS, API_BASE, API_KEY } from "../constants.mjs";

export async function createNewListing(title, endsAt, description, media) {
  let object

  if(media) {
    object = {
      title: title, endsAt: endsAt, description: description, media: media
    }
  } else {
    object = {
      title: title, endsAt: endsAt, description: description
    }
  }

  try {
    const response = await fetch(API_BASE + API_ALL_LISTINGS, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(object),
    });
    if(response.ok) {
      return await response.json();
    } else {
      if (response.status === 403) throw new Error("403, Forbidden, Was not able to create new listing");
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}

