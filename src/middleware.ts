import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export const config: MiddlewareConfig = {
    matcher: ["/api/admin"]
}

export default async function middleware(req: NextRequest) {
    const params = req.nextUrl.searchParams
    const email = params.get("email")
    const password = params.get("password")

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        return NextResponse.redirect(new URL('/api/admin/dashboard', req.url))
    } else {
        return NextResponse.redirect(new URL('/api/admin/login', req.url))
    }

}