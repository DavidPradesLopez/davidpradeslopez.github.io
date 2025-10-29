import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { LineChart, Home, Database, Github, ArrowRight } from 'lucide-react';

const projects: Project[] = [
  {
    title: 'Análisis del Stock de Nike',
    description: 'Análisis histórico del precio de cierre de Nike (NKE) y predicción con ARIMA. Este proyecto está organizado como un portfolio de análisis de datos, con limpieza, exploración, visualización y forecasting.',
    link: 'https://github.com/DavidPradesLopez',
    icon: LineChart,
  },
  {
    title: 'Gestión de alquileres',
    description: 'Esta aplicación permite a los propietarios llevar un control detallado de sus alquileres, inquilinos y pagos. El objetivo es proporcionar una herramienta intuitiva que facilite la gestión diaria.',
    link: 'https://github.com/DavidPradesLopez',
    icon: Home,
  },
  {
    title: 'Mis proyectos de datos',
    description: 'Repositorio con una colección de proyectos de análisis de datos desarrollados utilizando SQL, Python, R, y Power BI, demostrando técnicas avanzadas y soluciones prácticas.',
    link: 'https://github.com/DavidPradesLopez',
    icon: Database,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-gradient-to-br from-gradient-purple via-gradient-blue to-gradient-green py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Mis Proyectos Destacados</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A continuación, te presento algunos de mis proyectos más importantes en GitHub, donde podrás ver ejemplos concretos de mi trabajo y habilidades técnicas:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <project.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className="text-center font-headline">{project.title}</CardTitle>
                <CardDescription className="text-center">{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button variant="ghost" asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver en GitHub <Github className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild className="mt-8">
            <Link href="https://github.com/DavidPradesLopez" target="_blank" rel="noopener noreferrer">
              Visita mi GitHub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
