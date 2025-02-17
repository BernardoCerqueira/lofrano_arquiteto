import type { Metadata } from "next";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import { Lato } from "next/font/google"

const lato = Lato({
  variable: "--font-cloud",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Lofrano Arquitetura",
  description: "Escritório de Arquitetura - Transforme seus sonhos em realidade com projetos sob medida feitos por especialistas - Localizado em Petrópolis/RJ e com atuação remota.",
  robots: "index, follow",
  
  openGraph: {
    type: "website",
    description: "Escritório de Arquitetura - Transforme seus sonhos em realidade com projetos sob medida feitos por especialistas.",
    title: "Lofrano Arquitetura",
    images: [
      {
        url: "https://lofranoarquitetura.com.br/favicon.ico",
        width: 600,
        height: 600,
        alt: "Lofrano Arquitetura"
      }
    ],
    
  },
  keywords: "arquitetura, lofrano, arquiteto, petrópolis, rio de janeiro, design, interiores, construção, projetos, projeto, arquitetônico, joão, pedro, serra, serrana, arquiteta, joão pedro"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="EmWENPS_TCMFOuNgTWJhGCBZ8QxImpFYL3rsdl8RCCE" />
      </head>
      <body className={`${lato.variable}`}>
        {children}


      </body>
    </html>
  );
}
