// // middleware.ts
// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// const publicRoutes = [
//   "/",
//   "/login",
//   "/guest",
//   "/guest-payment",
//   "/privacy",
//   "/terms",
//   "/about",
//   "/forgot-password",
//   "/verify-otp",
//   "/verify-account",
//   "/forgot-password",
//   "/change-password",
// ];

// const authRoutes = ["/login"];

// export async function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   const cookieStore = await cookies();
//   const token = cookieStore.get("jwt")?.value;
//   const isLoggedIn = !!token;
//   if (isLoggedIn && authRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   if (!isLoggedIn && !publicRoutes.includes(pathname)) {
//     const loginUrl = new URL("/login", request.url);
//     loginUrl.searchParams.set("next", pathname); 
//     return NextResponse.redirect(loginUrl);
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, robots.txt, etc.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//     // Always run for API routes too
//     "/(api|trpc)(.*)",
//   ],
// };


// middleware.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// These are the ONLY routes users are allowed to visit
const ALLOWED_ROUTES = ["/", "/coming-soon"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow access to the two permitted pages
  if (ALLOWED_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // For everything else → redirect to /coming-soon
  const comingSoonUrl = new URL("/coming-soon", request.url);

  // Optional: preserve the original path as a query param (e.g. ?next=/dashboard)
  comingSoonUrl.searchParams.set("next", pathname);

  return NextResponse.redirect(comingSoonUrl);
}

export const config = {
  matcher: [
    /*
     * Run middleware on all routes except static assets and Next.js internals
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    // Also run on API routes (optional – remove if you don’t want to block APIs)
    "/(api|trpc)(.*)",
  ],
};