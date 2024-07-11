import {scrape} from "@/lib/actions";
import {NextResponse} from "next/server";


export const maxDuration = 300;
export const dynamic = 'force-dynamic';

//POST endpoint for scrapped data 
export const POST = async (request) => {
    const body = await request.json();

    const productName = body.searchText;

    const result = await scrape(productName);

    const response = {data: result};
    return NextResponse.json(response);
};
