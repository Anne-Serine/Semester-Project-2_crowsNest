import { API_BASE, API_ALL_LISTINGS } from "../constants.mjs";

export async function getAllListings() {
  try {
    let postURL = API_BASE + API_ALL_LISTINGS;

    const response = await fetch(postURL);
    const result = response.json();

    if(response.ok) {
      return await result
    } else {
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500) throw new Error("500, Internal server error");
      // For any other server error
      throw new Error(response.status);
    }
  } catch(error) {
    return error
  }
}