"use server";

import { connectToDB } from "../mongoose";
import mongoose from "mongoose";
import { scrapedFromEverythingZimbabwe } from "../scraapping_engine_EZ";
import { scrapedFromLaptopZone } from "../scrapping_engine_LP";
import Tracker from "../models/tracker.model";

export async function scrape(productName) {
  //scrapping functions from all sources
  //return an array of all scrapped data

  try {
    const scrapedLP = await scrapedFromLaptopZone(productName);
    const scrapedEZ = await scrapedFromEverythingZimbabwe(productName);

    // combine the two arrays
    const products = [...scrapedEZ, ...scrapedLP];

    const sortedProducts = products.sort((a, b) => a.price - b.price);
    
    //addToTrackList(one, "takundaveni@gmail.com");
    printAllRecords();
    return sortedProducts;

  } catch (error) {
    console.log(error);
  } 
}


export async function addToTrackList(product , email) {
  try{
    await connectToDB();

    let productToTrack = product;
    const existingProduct = await Tracker.findOne({link: productToTrack.link});
    console.log(1);

    if (existingProduct) {
      //add email to the list of emails
      const existingEmail = existingProduct.emails.includes(email);

      if (!existingEmail) {
        existingProduct.emails.push(email);
        await existingProduct.save();
        console.log("email added to existing product");
      }
    }

    if (!existingProduct) {
      const newProduct = new Tracker({
        emails: [email],
        link: product.link,
        image: product.image,
        price: product.price,
        description: product.description,
        title: product.title
      });
      await newProduct.save();
      console.log("new product saved");
    }

  }catch (error) {
    console.log(error.message);
  }finally {
    await mongoose.connection.close()
  }
}


async function printAllRecords() {
  try {
    await connectToDB();
    const products = await Tracker.find(); // Fetch all documents
    console.log(products); // Print the documents
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}