import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

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
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
