import { scrape } from "@/lib/actions";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  // parse the incoming body into a JS object
  const body = await request.json();

  const productName = body.searchText;

  console.log(productName);

  const result = await scrape(productName);

  const response = { data: result };

  return NextResponse.json(response);
};
