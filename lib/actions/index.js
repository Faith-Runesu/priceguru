"use server"

import { scrapedfromLaptopZone } from "../scrapping_engine";

export async function scrape(productName){
    //screpping functions from all sources
    //return an object of all scrapped data
    let scrapedtish;
    try{
        const scrapedtish = await scrapedfromLaptopZone(productName);
    }catch(error) {
        console.log(`uhmm something went wrong ${error.message}`);
    }finally{
        return scrapedtish;
    }
}