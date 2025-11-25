// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Pedro Henrique | Portfólio",
  description:
    "Portfólio profissional de Pedro Henrique | Desenvolvedor Fullstack e IA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}



