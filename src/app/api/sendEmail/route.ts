import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const { name, phone, email, city, userMessage } = await req.json()

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
            text: `Nome: ${name}\nTelefone: ${phone}\nE-mail: ${email}\nCidade: ${city}\n${userMessage && "Mensagem: " + userMessage}`,
        })

        console.log('Email enviado:', info.response)
        return NextResponse.json({ message: 'E-mail enviado com sucesso!', status: true }, {status: 200})
    } catch (error) {
        console.error('Erro ao enviar email:', error)
        return NextResponse.json({ message: 'Erro ao enviar e-mail', status: true }, {status: 500})
    }
}
