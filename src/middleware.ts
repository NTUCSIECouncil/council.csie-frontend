import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const { ua } = userAgent(req);

  if (/iP(hone|ad|od)/.test(ua) || ua.includes('Android')) {
    return NextResponse.redirect('/old_council');
  }
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico, sitemap.xml, robots.txt (metadata files)
   * - old_council (old council pages)
   */
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|old_council).*)',
};
