import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      const path = req.nextUrl.pathname;

      if (path.startsWith("/admin")) {
        return token?.role === 'admin'
      }
      if (path.startsWith("/api/admin")) {
        return token?.role === 'admin'
      }

      return token !== null
    }
  }
})

export const config = {
  matcher: ['/api/admin/:slug*', '/api/user/:slug*', '/user/:slug*', '/admin/:slug*', '/user', '/admin'],
}
