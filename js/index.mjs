import { registerUser } from "./api/auth/register.mjs";
import { getAllListings } from "./api/listings/allListings.mjs";
import { listingsContainer } from "./events/listings/allListings.mjs";
import { searchListingsByTitleAndDescription } from "./events/searchListings.mjs";


getAllListings();
listingsContainer();
searchListingsByTitleAndDescription();
registerUser();