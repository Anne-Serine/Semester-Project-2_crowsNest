import { load } from "../../storage/index.mjs";
import { API_BASE, API_KEY, API_SINGLE_PROFILE, API_SINGLE_PROFILE_PARAMS } from "../constants.mjs";

export async function getSingleProfile() {
  try {
    const user = load("profile")
    const response = await fetch(API_BASE + API_SINGLE_PROFILE + `/${user.name}` + API_SINGLE_PROFILE_PARAMS, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
    });
    if (response.ok) {
      return await response.json();
    }
  } catch(error) {
    return error;
  }
}