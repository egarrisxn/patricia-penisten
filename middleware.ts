import { NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: any) {
  if (process.env.NODE_ENV === "development") {
    if (request.nextUrl.pathname.startsWith("/admin")) {
      console.log(
        "Supabase middleware skipped for /admin path in development."
      );
    }
    return NextResponse.next();
  }

  return await updateSession(request);
}

export const config = {
  matcher: ["/admin/:path*", "/auth"],
};
