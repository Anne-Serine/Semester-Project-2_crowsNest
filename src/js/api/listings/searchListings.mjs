import { API_BASE, API_SEARCH } from '../constants.mjs';

export async function searchListings(value) {
  try {
    let postURL = API_BASE + API_SEARCH + value;

    const response = await fetch(postURL);
    const result = response.json();

    if (response.ok) {
      return await result;
    } else {
      if (response.status === 403)
        throw new Error('403, Forbidden, invalid API key');
      if (response.status === 404) throw new Error('404, Not found');
      if (response.status === 500)
        throw new Error('500, Internal server error');
      // For any other server error
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}
