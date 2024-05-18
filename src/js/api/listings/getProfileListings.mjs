import { load } from '../../storage/index.mjs';
import { API_BASE, API_SINGLE_PROFILE, API_KEY } from '../constants.mjs';

export async function getProfileListings(userName) {
  try {
    const postURL = API_BASE + API_SINGLE_PROFILE + `/${userName}/listings`;

    const response = await fetch(postURL, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
      method: "GET",
    });
    const result = response.json();

    if (response.ok) {
      return await result;
    } else {
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