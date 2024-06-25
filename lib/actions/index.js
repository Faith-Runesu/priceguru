"use server";

import { scrapedFromEverythingZimbabwe } from "../scraapping_engine_EZ";
import { scrapedFromLaptopZone } from "../scrapping_engine_LP";

export async function scrape(productName) {
  //scrapping functions from all sources
  //return an object of all scrapped data
  let returnObject = [];
  try {
    const scrapedLP = await scrapedFromLaptopZone(productName);
    const scrapedEZ = await scrapedFromEverythingZimbabwe(productName);
    returnObject = [...scrapedEZ, ...scrapedLP];
  } catch (error) {
    console.log(`uhmm something went wrong ${error.message}`);
    
  }finally{
    returnObject.sort((a,b) => a.price - b.price);
    console.log(returnObject);
    //return returnObject;
    return({p: 3});
  }
}
