import { API_BASE, API_SINGLE_LISTING_PARAMS, API_SINGLE_LISTING_URL } from "../constants.mjs";


export async function getSingleListing(id) {
  try {
    const response = await fetch(API_BASE + API_SINGLE_LISTING_URL + `/${id}` + API_SINGLE_LISTING_PARAMS, {
    });
    if(response.ok) {
      const result = await response.json();
      return result;
    } else {
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500) throw new Error("500, internal server error");
      // For any other server error
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}
