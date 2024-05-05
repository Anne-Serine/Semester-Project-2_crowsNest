import { listingsContainer } from "./events/listings/allListings.mjs";
import { searchListingsByTitleAndDescription } from "./events/searchListings.mjs";
import { setRegisterFormListener } from "./events/auth/register.mjs";
import { setLoginFormListener } from "./events/auth/login.mjs";
import { logoutUser } from "./events/auth/logout.mjs";
import { load } from "./storage/index.mjs";

const path = location.pathname;
const loggedIn = load("token");

if (path === "/register/" || path === "/login/") {
  if (loggedIn) {
    window.location.href = "/profile/";
  }
  setLoginFormListener();
  setRegisterFormListener();
} else if (path === "/profile/") {
  if (!loggedIn) {
    window.location.href = "/";
  }
}

listingsContainer();
searchListingsByTitleAndDescription();
logoutUser();
