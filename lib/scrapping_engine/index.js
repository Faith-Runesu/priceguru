"use server"
import axios from "axios";
import * as cheerio from "cheerio";

function config(){
    //brightdata config for the web unlocker
    const username = process.env.BRIGHTDATA_USERNAME;
    const password = process.env.BRIGHTDATA_PASSWORD;
    const port = 22225;
    const session_id = (1000000 * Math.random()) | 0;

    const options = {
        auth:{
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }
    return options;
}

async function createSiteUrls(productName){
    // axios with browser headers
    const options = config();
    let links= new Set();
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

export async function scrapedfromLaptopZone(productName) {
    const productUrls = await createSiteUrls(productName);
    
    return productUrls;
}