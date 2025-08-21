import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "2YA - Plataforma de Citas de Belleza en Perú",
  description: "2YA conecta a profesionales, negocios y clientes en la plataforma líder de citas y promociones de belleza en Perú. Tu cita perfecta, a un clic.",
  keywords: "belleza, citas, Perú, profesionales, esteticistas, peluquería, spa",
  authors: [{ name: "2YA Team" }],
  openGraph: {
    title: "2YA - Plataforma de Citas de Belleza en Perú",
    description: "Conecta con los mejores profesionales de belleza en Perú",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
