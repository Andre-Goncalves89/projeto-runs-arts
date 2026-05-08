import './globals.css'

export const metadata = {
  title: 'projeto-runs-arts',
  description: 'Projeto de automação QA André Gonçalves',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}