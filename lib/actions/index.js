"use server";

import { scrapedFromEverythingZimbabwe } from "../scraapping_engine_EZ";
import { scrapedFromLaptopZone } from "../scrapping_engine_LP";

export async function scrape(productName) {
  //scrapping functions from all sources
  //return an array of all scrapped data

  try {
    const scrapedLP = await scrapedFromLaptopZone(productName);
    const scrapedEZ = await scrapedFromEverythingZimbabwe(productName);

    // combine the two arrays
    const products = [...scrapedEZ, ...scrapedLP];

    const sortedProducts = products.sort((a, b) => a.price - b.price);

    return sortedProducts;

  } catch (error) {
    console.log(`uhmm something went wrong ${error.message}`);
  } 
}
