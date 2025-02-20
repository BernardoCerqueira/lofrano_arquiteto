import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const ADMIN_EMAIL = process.env.ADMIN_EMAIL!
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!
const JWT_SECRET = process.env.JWT_SECRET!

export async function POST(req: NextRequest) {
    const { email, password } = await req.json()

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 })
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" })

    const response = NextResponse.json({ message: "Login bem-sucedido" })
    response.headers.set(
        "Set-Cookie",
        `session_token=${token}; HttpOnly; Secure; Path=/; Max-Age=86400`
    )

    return response
}