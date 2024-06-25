import { scrape } from "@/lib/actions";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  
  console.log(request.body);
  console.log("ppppppppp")
  
  const { searchText: productName } = request.body;
  console.log('------');
  console.log(productName); 
  const result = await scrape(productName);

  const response = {data: result};


  return NextResponse.json(response);
};

export const GET = async (request) => {
  return NextResponse.json(e);
};

