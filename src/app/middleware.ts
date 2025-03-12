import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const loggedInUser = req.cookies.get("user");

  // If trying to access dashboard without login, redirect to /login
  if (req.nextUrl.pathname.startsWith("/dashboard") && !loggedInUser) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If already logged in and trying to access login page, redirect to dashboard
  if (req.nextUrl.pathname === "/login" && loggedInUser) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only on login and dashboard pages
export const config = {
  matcher: ["/login", "/dashboard"],
};
