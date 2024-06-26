// import { listingsContainer } from "./events/listings/allListings.mjs";
import { searchListingsByTitleAndDescription } from "./events/searchListings.mjs";
import { setRegisterFormListener } from "./events/auth/register.mjs";
import { setLoginFormListener } from "./events/auth/login.mjs";
import { logoutUser } from "./events/auth/logout.mjs";
import { load } from "./storage/index.mjs";
import { toggleNav } from "./helpers/toggleNav.mjs";
import { toggleSearch } from "./helpers/toggleSearch.mjs";
import { viewSingleListing } from "./events/listings/singleListing.mjs";
import { viewSingleProfile } from "./events/profile/viewSingleProfile.mjs";
import { setCreateNewListingEvent } from "./events/listings/createNewListing.mjs";
import { viewAllListings } from "./events/listings/allListings.mjs";



const path = location.pathname;
const loggedIn = load("token");

if (path === "/register/" || path === "/login/") {
  if (loggedIn) {
    window.location.href = "/profile/";
  }
  setLoginFormListener();
  setRegisterFormListener();
} else if (path === "/profile/" || path === "/newListing/") {
  if (!loggedIn) {
    window.location.href = "/login/";
  }
}

let listingPage = 1;
viewAllListings(listingPage)

searchListingsByTitleAndDescription();
logoutUser();
toggleNav();
toggleSearch();
viewSingleListing();
viewSingleProfile();
setCreateNewListingEvent();




const loginBtn = document.querySelector("#loginBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const headerNavItems = document.querySelectorAll(".logged-in");

if (loggedIn && logoutBtn) {
  logoutBtn.classList.remove("lg:hidden");
  logoutBtn.classList.add("lg:flex");
  headerNavItems.forEach((li) => {
    li.classList.remove("hidden");
  });
} else if (loginBtn) {
  loginBtn.classList.remove("lg:hidden");
  loginBtn.classList.add("lg:flex");
}

