import {scrape} from "@/lib/actions";
import {NextResponse} from "next/server";


//export const maxDuration = 300;
//export const dynamic = 'force-dynamic';

export const POST = async (request) => {
    // parse the incoming body into a JS object
    const body = await request.json();

    const productName = body.searchText;

    const result = await scrape(productName);

    const response = {data: result};

    return NextResponse.json(response);
};
