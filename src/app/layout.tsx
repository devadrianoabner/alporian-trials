import type { Metadata } from "next";
import ThemeWrapper from "@/app/components/ThemeWrapper";

export const metadata: Metadata = {
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
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
