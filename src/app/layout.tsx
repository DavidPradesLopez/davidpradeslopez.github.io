import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'David Prades López - Transformo datos en decisiones inteligentes | Big Data & AI | Python, SQL, Excel avanzado | Estrategia, Análisis y Visualización de Datos',
  description: 'Descubre el portfolio de David Prades López, un analista de datos con más de 15 años de experiencia en el sector retail. Explora mis proyectos y habilidades en optimización del rendimiento comercial, gestión financiera y más.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative bg-white">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
