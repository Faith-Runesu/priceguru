"use server"
import axios from "axios";
import * as cheerio from "cheerio";
import { config } from "../globals";


async function createSiteUrls(productName){
    // axios with browser headers
    const options = config();
    let links = new Set();
    try{
        //lets do this for the first site
        const fullUrl = `https://laptopzone.co.zw/?s=${productName}&post_type=product`;
        console.log(fullUrl);
        const response = await axios.get(fullUrl, options);
        //console.log(response.data);
        const $ = cheerio.load(response.data);
        const tag = $('a.woocommerce-LoopProduct-link.woocommerce-loop-product__link');
        tag.each(function() {
            const link =$(this).attr('href');
            if (link){
                links.add(link);
            }
        });
        links=Array.from(links);
        console.log(links);
    }catch(error) {
        throw new Error(`Error: {error.message}`);
    }
    return links
}

export async function scrapedFromLaptopZone(productName) {
    const productUrls = await createSiteUrls(productName);
    try{
        //scrape the product urls
        for (let i = 0; i < productUrls.length; i++){
             const response = await axios.get(productUrls[i], config());
            const $ = cheerio.load(response.data);
            //get product name
            const productTag = $('.summary.entry-summary');
            productTag.each(function(){
                $(this).children().each(function() {
                    if ($(this).hasClass('product_title') && $(this).hasClass('entry-title')){
                        const productTitle = $(this).text();
                        console.log(productTitle);
                    }
                    if ($(this).hasClass('price')){
                        const productPrice = $(this).text();
                        console.log(productPrice);
                        break;
                    }                
                })
            })
        }   

    }catch (error){
        console.log(`Error: ${error.message}`);
    }

    return productUrls;
}