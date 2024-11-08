import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
  title: "oGuedes | Dev",
  description: "Meu portfólio profissional para vagas de Desenvolvedor Fullstack",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
