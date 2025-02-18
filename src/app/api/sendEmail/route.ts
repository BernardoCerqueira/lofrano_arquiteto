import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const { name, phone, email, city } = await req.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: 'Novo contato do site!',
            text: `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nCidade: ${city}`,
        })

        console.log('Email enviado:', info.response)
        return NextResponse.json({ message: 'Email enviado com sucesso!' }, {status: 200})
    } catch (error) {
        console.error('Erro ao enviar email:', error)
        return NextResponse.json({ message: 'Erro ao enviar email' }, {status: 500})
    }
}
