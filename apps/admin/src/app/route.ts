import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  return NextResponse.redirect(new URL('/admin', url.origin));
}
