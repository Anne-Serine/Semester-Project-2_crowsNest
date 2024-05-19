import { load } from "../../storage/index.mjs";
import { API_ALL_LISTINGS, API_BASE, API_KEY } from "../constants.mjs";

export async function placeBid(inputValue, id) {
  try {
    const response = await fetch(API_BASE + API_ALL_LISTINGS + `/${id}/bids`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "amount": +inputValue
      }),
    });
    if(response.ok) {
      return await response.json();
    } else {
      throw new Error;
    }
  } catch (error) {
    return error;
  }
}