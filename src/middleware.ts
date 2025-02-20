import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export const config = {
    runtime: "nodejs"
}

const JWT_SECRET = process.env.JWT_SECRET!

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.endsWith("/admin/dashboard")) {
        const token = req.cookies.get("session_token")?.value

        if (!token) {
            return NextResponse.redirect(new URL("/api/admin/login", req.url))
        }

        try {
            jwt.verify(token, JWT_SECRET)
            return NextResponse.next()
        } catch (error) {
            setTimeout(() => {
                console.log(error)
                return NextResponse.redirect(new URL("/api/admin/login", req.url))
            }, 1000)
        }
    }

    if (req.nextUrl.pathname.endsWith("/admin")) {
        return NextResponse.redirect(new URL('/api/admin/login', req.url))
    }
}