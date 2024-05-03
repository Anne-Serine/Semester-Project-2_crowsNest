import { API_BASE, API_REGISTER } from "../constants.mjs";

export async function registerUser(name, email, password) {
  try {
    const response = await fetch(API_BASE + API_REGISTER, {
      method: "POST",
      headers: {
        "content-Type" : "application/json",
      },
      body: JSON.stringify({name, email, password})
    })
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      // return {error: "Could not register the account."}
      if (response.status === 400) throw new Error("400, Bad Request");
        // For any other server error
        throw new Error(response.status);
    }
  } catch (error) {
    return error;
  }
}