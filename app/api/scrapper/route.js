import { NextResponse } from "next/server";

export const POST = async (request) => {

  const { productName } = request.body;
 

  const response = {

  }

  return NextResponse.json(response);
};

export const GET = async (request) => {
  return NextResponse.json(e);
};

