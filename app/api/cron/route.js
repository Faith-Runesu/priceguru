import Tracker from "@/lib/models/tracker.model";
import { connectToDB } from "@/lib/mongoose";
import { emailBody, sendMail } from "@/lib/nodemailer";
import mongoose from "mongoose";
import { scrapedOneFromLaptopZone } from "@/lib/scrapping_engine_LP";
import { scrapedOneFromEverythingZimbabwe} from "@/lib/scraapping_engine_EZ"
import { NextResponse } from "next/server";

export const maxDuration = 600
export const dynamic = 'force-dynamic'

export async function GET() {
    let updatedProducts = []
    try{
        await connectToDB();
        let updated = false;
        const trackers = await Tracker.find({});
        //scrape using tracker
        for (let i = 0; i < trackers.length; i++) {
            let track = trackers[i];
            if (track.link.startsWith("https://everythingzimbabwean.com")) {
                updated = await scrapedOneFromEverythingZimbabwe(track.link);
            } else if (track.link.startsWith("https://laptopzone.co.zw")) {
                updated = await scrapedOneFromLaptopZone(track.link);
            }
            if (updated.price){
                let newTracker = {
                    price: updated.price,
                }
                await Tracker.findByIdAndUpdate(track._id, newTracker);
                if (updated.price !== track.price) {
                    updatedProducts.push(updated)
                    const emailContent = emailBody(updated, "PRICECHANGE");
                    for (let j = 0; j < track.emails.length; j++) {
                        await sendMail(emailContent, track.emails[j]);
                    }
                }

            }
        }
        return NextResponse.json({
            message: 'Ok',
            data: updatedProducts,
        })
    } catch (error) {
        throw new Error(`Error in GET request ${error}`)
    }
}