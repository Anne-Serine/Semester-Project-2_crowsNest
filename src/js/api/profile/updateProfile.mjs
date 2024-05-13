import { load } from "../../storage/index.mjs";
import { API_BASE, API_KEY, API_SINGLE_PROFILE } from "../constants.mjs";

export async function updateProfile(profile) {
  try {
    const user = load("profile")
    const response = await fetch(API_BASE + API_SINGLE_PROFILE + `/${user.name}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile),
    });
    if (response.ok) {
      return await response.json();
    }
  } catch(error) {
    return error;
  }
}