// middleware.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Public routes that anyone can access (even when logged in)
const publicRoutes = [
  "/",
  "/login",
  "/guest",
  "/privacy",
  "/terms",
  "/about",
  "/forgot-password",
  "/verify-otp",
];

// Routes that should redirect logged-in users away from (like login page)
const authRoutes = ["/login"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // Get the JWT token from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;
  const isLoggedIn = !!token;
  // 1. If user is logged in and trying to access login → redirect to home
  if (isLoggedIn && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // 2. If user is NOT logged in and trying to access a protected route → go to login
  if (!isLoggedIn && !publicRoutes.includes(pathname)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname); // optional: remember where they wanted to go
    return NextResponse.redirect(loginUrl);
  }
  // 3. Otherwise → allow access (this includes: public pages + logged-in users on any page)
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, etc.
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    // Always run for API routes too
    "/(api|trpc)(.*)",
  ],
};
