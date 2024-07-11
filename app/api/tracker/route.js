import { addToTrackList } from "@/lib/actions";
import { NextResponse } from "next/server";

export const maxDuration = 300;
export const dynamic = 'force-dynamic'

export const POST = async (request) => {
    
  const body = await request.json();

  const email = body.email;
  const product = body.product;

  const result = await addToTrackList(product, email);

  const response = { data: result };
  return NextResponse.json(response);
};

