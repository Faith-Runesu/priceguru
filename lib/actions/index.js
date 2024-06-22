"use server";

import { scrapedFromLaptopZone } from "../scrapping_engine";

export async function scrape(productName) {
  //scrapping functions from all sources
  //return an object of all scrapped data
  let scrapedtish;
  try {
    const scrapedtish = await scrapedFromLaptopZone(productName);
  } catch (error) {
    console.log(`uhmm something went wrong ${error.message}`);
  } finally {
    return scrapedtish;
  }
}
