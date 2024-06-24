"use server";

import { scrapedFromEverythingZimbabwe } from "../scraapping_engine_EZ";
import { scrapedFromLaptopZone } from "../scrapping_engine_LP";



export async function scrape(productName) {
  //scrapping functions from all sources
  //return an object of all scrapped data
  let scrapedObj= {};
  try {
    const scrapedLP = await scrapedFromLaptopZone(productName);
    const scrapedEZ= await scrapedFromEverythingZimbabwe(productName);
    scrapedObj.laptopZone = scrapedLP;
    scrapedObj.everythingZim = scrapedEZ;
  } catch (error) {
    console.log(`uhmm something went wrong ${error.message}`);
  } finally {
    return scrapedObj;
  }
}
