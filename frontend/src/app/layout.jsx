import "./globals.css"

export const metadata = {
  title: "Plataforma Democrática",
  description:
    "Uma plataforma democrática é uma organização online voltada para facilitar a discussão, proposta e votação de decisões que impactam a vida universitária. Ela se baseia na escuta ativa das necessidades da comunidade acadêmica, promovendo colaboração e transparência. Esta plataforma permite que todos os membros da universidade participem ativamente no desenvolvimento de políticas e práticas educacionais.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
