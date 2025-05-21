export const metadata = {
  title: "Alporian Trials",
  description: "Jornada das Carroças no mundo de Alporia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
