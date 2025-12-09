// middleware.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  "/",
  "/login",
  "/privacy",
  "/terms",
  "/about",
  "/forgot-password",
  "/verify-otp",
  "/verify-account",
  "/forgot-password",
  "/change-password",
];

const authRoutes = ["/login"];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;
  const isLoggedIn = !!token;
  if (isLoggedIn && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isLoggedIn && !publicRoutes.includes(pathname)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname); 
    return NextResponse.redirect(loginUrl);
  }
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
