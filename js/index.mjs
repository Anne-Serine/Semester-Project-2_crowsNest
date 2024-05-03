
// import { createAPIKey } from "./api/constants.mjs";
import { listingsContainer } from "./events/listings/allListings.mjs";
import { searchListingsByTitleAndDescription } from "./events/searchListings.mjs";
import { setRegisterFormListener } from "./events/auth/register.mjs";
import { setLoginFormListener } from "./events/auth/login.mjs";

listingsContainer();
searchListingsByTitleAndDescription();
setRegisterFormListener();
setLoginFormListener();

// createAPIKey()