import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.endsWith("/admin/dashboard")) {
        const queryParams = req.nextUrl.searchParams
        const email = queryParams.get("email")
        const password = queryParams.get("password")

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/api/admin/login', req.url))
        }
    }

    if (req.nextUrl.pathname.endsWith("/admin")) {
        return NextResponse.redirect(new URL('/api/admin/login', req.url))
    }
}