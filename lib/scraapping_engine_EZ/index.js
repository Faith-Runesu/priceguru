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
        const fullUrl = `https://everythingzimbabwean.com/?s=${productName}&post_type=product&search-products=`;
        console.log(fullUrl);
        const response = await axios.get(fullUrl, options);
        //console.log(response.data);
        const $ = cheerio.load(response.data);
        const tag = $('.products.columns-4').text();
        $('ul.products.columns-4 > li.product-tile').each(function() {
            const link = $(this).find('a.product-link').attr('href');
            if (link) {
                links.add(link); // Assuming 'links' is a Set or similar collection
            }
        });
        links=Array.from(links);
        console.log(links);
    }catch(error) {
        throw new Error(`Error: {error.message}`);
    }
    return links
}

export async function scrapedFromEverythingZimbabwe(productName) {
    const productUrls = await createSiteUrls(productName);
    let ezObjects = {};
    let ezObject = {};
    try{
        //scrape the product urls
        for (let i = 0; i < productUrls.length; i++){
            const response = await axios.get(productUrls[i], config());
            const $ = cheerio.load(response.data);
            //get product name
            const productTag = $('.product-content');
            productTag.each(function(){
                $(this).children().each(function() {
                    //const productImage = $(this).find('href').text();
                    //console.log(productImage);
                    const productTitle = $(this).find('.product_title.entry-title.h3').text();
                    ezObject.title = productTitle;
                    console.log(productTitle);
                    const productPrice = $(this).find('.price').text();
                    ezObject.price = productPrice;
                    console.log(productPrice);
                    const productDescription = $(this).find('#tab-description').text();
                    ezObject.description = productDescription;
                    console.log(productDescription);
                    })              
                })
                ezObjects[i]={
                    id: i,
                    details: ezObject
                }
            }
        }catch (error){
        console.log(`Error: ${error.message}`);
    }
    return ezObjects;
}