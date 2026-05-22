import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoute = ["/dashboard"];

// FIX: Renamed from 'proxy' to 'middleware' so Next.js detects it
export async function middleware(req) {
  const token = await getToken({ 
    req, 
    secret: process.env.NEXTAUTH_SECRET 
  });
  const reqPath = req.nextUrl.pathname;
  
  const isPrivateReq = privateRoute.some((route) =>
    reqPath.startsWith(route)
  );

  console.log("🔐 Middleware - Path:", reqPath, "Has token:", !!token);

  // Check if user is not authenticated and trying to access a private route
  if (!token && isPrivateReq) {
    console.log("❌ Redirecting to login - no token for protected route");
    return NextResponse.redirect(
      new URL(`/login`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};