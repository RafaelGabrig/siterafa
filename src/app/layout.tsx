import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from '../components/CustomCursor';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio pessoal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
