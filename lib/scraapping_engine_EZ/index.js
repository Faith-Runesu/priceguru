import axios from "axios";
import * as cheerio from "cheerio";
import { config } from "../globals";

//get urls from search page
async function createSiteUrls(productName){
    const options = config();
    let links = new Set();
    try{
        let count = 0;
        const fullUrl = `https://everythingzimbabwean.com/?s=${productName}&post_type=product&search-products=`;
        const response = await axios.get(fullUrl, options);
        const $ = cheerio.load(response.data);
        const tag = $('.products.columns-4').text();
        $('ul.products.columns-4 > li.product-tile').each(function() {
            const link = $(this).find('a.product-link').attr('href');
            if (count >= 4) {
                return false;
            }
            if (link) {
                links.add(link);
                count++;
            }
        });
        links=Array.from(links);
    }catch(error) {
        throw new Error(`Error: ${error.message}`);
    }
    return links
}

//scrape the everythingZim website
export async function scrapedFromEverythingZimbabwe(productName) {
    const productUrls = await createSiteUrls(productName);
    let ezObjects = [];
    try{
        //scrape the product urls
        for (let i = 0; i < productUrls.length; i++){
            const response = await axios.get(productUrls[i], config());
            const $ = cheerio.load(response.data);
            let ezObject = {};

            ezObject.link = productUrls[i];
            //get product name
            const productTag = $('.product-content');
            const imageUrl = $('img.wp-post-image').attr('src');
            console.log(imageUrl);
            const not_found = "/assets/image_not_found"
            productTag.each(function(){
                $(this).children().each(function() {
                    const productImage = $('.woocommerce-product-gallery__image').attr('data-thumb');
                    ezObject.image = imageUrl || not_found
                    const productTitle = $(this).find('.product_title.entry-title.h3').text();
                    ezObject.title = productTitle;
                    const productPrice = $(this).find('.price').text();
                    ezObject.price = parseFloat(productPrice.replace(/[$,]/g, ''));;
                    const productDescription = $(this).find('#tab-description').text();
                    ezObject.description = productDescription.replace(/[\n\t]+/g, ' ').trim();;
                    })              
                })
                ezObjects.push(ezObject);
            }
        }catch (error){
        console.log(`Error: ${error.message}`);
    }
    return ezObjects;
}

//scrape one object from everythingZimbabwe website
export async function scrapedOneFromEverythingZimbabwe(productlink) {
    let ezObject = {};
    try{
        const response = await axios.get(productlink, config());
        const $ = cheerio.load(response.data);
        ezObject.link = productlink;
        const productTag = $('.product-content');
        const imageUrl = $('img.wp-post-image').attr('src');
        console.log(imageUrl);
        productTag.each(function(){
            $(this).children().each(function() {
                const productImage = $('.woocommerce-product-gallery__image').attr('data-thumb');
                ezObject.image = imageUrl;
                const productTitle = $(this).find('.product_title.entry-title.h3').text();
                ezObject.title = productTitle;
                const productPrice = $(this).find('.price').text();
                ezObject.price = parseFloat(productPrice.replace(/[$,]/g, ''));;
                const productDescription = $(this).find('#tab-description').text();
                ezObject.description = productDescription.replace(/[\n\t]+/g, ' ').trim();;
                })              
            })
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }  
    return ezObject 
}