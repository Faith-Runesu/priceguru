"use server"
import axios from "axios";
import * as cheerio from "cheerio";
import { config } from "../globals";

//gets url from the search page
async function createSiteUrls(productName){
    const options = config();
    let links = new Set();
    try{
        let count = 0;
        const fullUrl = `https://laptopzone.co.zw/?s=${productName}&post_type=product`;
        const response = await axios.get(fullUrl, options);
        const $ = cheerio.load(response.data);
        const tag = $('a.woocommerce-LoopProduct-link.woocommerce-loop-product__link');
        tag.each(function() {
            if (count >= 4) {
                return false;
            }
            const link =$(this).attr('href');
            if (link){
                links.add(link);
                count++;
            }
        });
        links=Array.from(links);
    }catch(error) {
        throw new Error(`Error: {error.message}`);
    }
    return links
}

//scrape product details
export async function scrapedFromLaptopZone(productName) {
    const productUrls = await createSiteUrls(productName);
    const not_found = "/assets/image_not_found"
    let lpObjects = [];
    try{
        for (let i = 0; i < productUrls.length; i++){
            let lpObject = {};
            lpObject.link = productUrls[i];
            const response = await axios.get(productUrls[i], config());
            const $ = cheerio.load(response.data);
            const productImage = $('img.wp-post-image').attr('src');
            console.log(productImage);
            const productTag = $('.summary.entry-summary');
            productTag.each(function(){
                $(this).children().each(function() {
                    if ($(this).hasClass('product_title') && $(this).hasClass('entry-title')){
                        const productTitle = $(this).text();
                        lpObject.description = productTitle;
                        lpObject.title = productTitle;
                        lpObject.image = productImage || not_found;
                    }
                    if ($(this).hasClass('price')){
                        const productPrice = $(this).first().text();
                        const parts = productPrice.split('$').map(part => part.trim()).filter(part => part !== '');
                        lpObject.price = parseFloat(parts[0].replace(/,/g, ''));
                    }                   
                })
            })
            lpObjects.push(lpObject);
        }
    }catch (error){
        console.log(`Error: ${error.message}`);
    }
    return lpObjects;
} 

//scrape one products details
export async function scrapedOneFromLaptopZone(productLink) {
    let lpObject = {};
    try{
        lpObject.link = productLink;
        const response = await axios.get(productLink, config());
        const $ = cheerio.load(response.data);
        const productImage = $('img.wp-post-image').attr('src');
        console.log(productImage);
        //get product name
        const productTag = $('.summary.entry-summary');
        productTag.each(function(){
            $(this).children().each(function() {
                if ($(this).hasClass('product_title') && $(this).hasClass('entry-title')) {
                    const productTitle = $(this).text();
                    lpObject.description = productTitle;
                    lpObject.title = productTitle;
                    lpObject.image = productImage;
                }
                if ($(this).hasClass('price')) {
                    const productPrice = $(this).first().text();
                    const parts = productPrice.split('$').map(part => part.trim()).filter(part => part !== '');
                    lpObject.price = parseFloat(parts[0].replace(/,/g, ''));
                }                      
            });
        });
    }catch (error){
        console.log(`Error: ${error.message}`);
    }
    return lpObject;
}