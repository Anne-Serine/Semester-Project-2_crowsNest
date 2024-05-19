import { load } from "../../storage/index.mjs";
import { API_ALL_LISTINGS, API_BASE, API_KEY } from "../constants.mjs";

export async function deleteListing(id) {
  
  try {
    const response = await fetch(API_BASE + API_ALL_LISTINGS + `/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json"
      },
    })
    if(response.ok) {
      return response;
    } else {
      if (response.status === 401) throw new Error("401, Unauthorized");
      if (response.status === 403) throw new Error("403, Forbidden");
      throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}