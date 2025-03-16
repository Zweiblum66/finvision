import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This is a simple middleware to simulate authentication
// In a real application, you would use a proper authentication system like NextAuth.js
export function middleware(request: NextRequest) {
  // For demo purposes, we'll consider the user as authenticated
  // In a real app, you would check for a valid session/token
  const isAuthenticated = true; // This would be a real check in production
  
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;
  
  // Check if the path is for dashboard routes
  if (pathname.startsWith('/dashboard') && !isAuthenticated) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  // Continue with the request if authenticated or not a protected route
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    // Apply this middleware only to dashboard routes
    '/dashboard/:path*',
  ],
};