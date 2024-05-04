
export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_BASE = "https://v2.api.noroff.dev";

// All listings endpoint doesn´t need authentication
export const API_ALL_LISTINGS = "/auction/listings";
export const API_SEARCH = "/auction/listings/search?q=";

// Endpoints that requires authentication
export const API_REGISTER = "/auth/register";
export const API_LOGIN = "/auth/login";




// // Create API-key
// export const API_KEY_URL = "/auth/create-api-key";


// export async function createAPIKey() {
//   const response = await fetch(API_BASE + API_KEY_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type" : "application/json",
//       Authorization: `Bearer ${load("token")}`,
//     },
//     body: JSON.stringify({
//       name: "Test API key",
//     })
//   });

//   if (response.ok) {
//     return await response.json();
//   }

//   console.error(await response.json());
//   throw new Error("Could not register for an API key");
// }