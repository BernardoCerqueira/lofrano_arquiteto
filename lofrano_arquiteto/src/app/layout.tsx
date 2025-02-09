import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Lato } from "next/font/google"

const lato = Lato({
  variable: "--font-cloud",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Lofrano Arquitetura",
  description: "Página de apresentação de Lofrano Arquitetura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
