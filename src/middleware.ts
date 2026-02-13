import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except:
  // - /api, /admin, /_next, /_vercel, /trpc routes
  // - files with extensions (e.g. favicon.ico)
  matcher: '/((?!api|admin|trpc|_next|_vercel|.*\\..*).*)',
}
