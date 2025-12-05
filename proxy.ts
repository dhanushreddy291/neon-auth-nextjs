import { neonAuthMiddleware } from "@neondatabase/neon-auth-next"

export default neonAuthMiddleware({
    loginUrl: "/auth/sign-in",
    authBaseUrl: process.env.NEON_AUTH_BASE_URL!
})

export const config = {
    matcher: [
        "/only-for-authenticated-users/:path*",
        "/((?!_next/static|_next/image|favicon.ico|).*)",
    ],
}