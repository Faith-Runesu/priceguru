"use server";

import { scrapedFromLaptopZone } from "../scrapping_engine_LP";



export async function scrape(productName) {
  //scrapping functions from all sources
  //return an object of all scrapped data
  let scrapedLP;
  try {
    scrapedLP = await scrapedFromLaptopZone(productName);
    //const scrapedS2= await scrapedFromSite2(productName);
    //const scrapedS3 = await scrapedFromSite3(productName);
  } catch (error) {
    console.log(`uhmm something went wrong ${error.message}`);
  } finally {
    return scrapedLP;
  }
}
