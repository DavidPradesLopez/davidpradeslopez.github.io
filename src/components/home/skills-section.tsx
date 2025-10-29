import type { Skill } from '@/lib/types';
import { TrendingUp, Banknote, HeartHandshake, Cog, Users, BarChart } from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Optimización del Rendimiento Comercial',
    description: 'Implementación de estrategias basadas en datos para mejorar las ventas y la rentabilidad.',
    icon: TrendingUp,
  },
  {
    name: 'Gestión Financiera Estratégica',
    description: 'Análisis de datos financieros para la toma de decisiones informadas.',
    icon: Banknote,
  },
  {
    name: 'Experiencia del Cliente',
    description: 'Uso de datos para mejorar la satisfacción y fidelización del cliente.',
    icon: HeartHandshake,
  },
  {
    name: 'Eficiencia Operativa',
    description: 'Identificación de oportunidades para optimizar procesos y reducir costos.',
    icon: Cog,
  },
  {
    name: 'Liderazgo y Desarrollo del Talento',
    description: 'Formación y mentoría de equipos para maximizar su potencial.',
    icon: Users,
  },
  {
    name: 'Análisis de Datos con Herramientas Avanzadas',
    description: 'Experiencia en el uso de Python, SQL y Power BI para extraer, transformar y visualizar datos, permitiendo una toma de decisiones basada en información precisa y actualizada.',
    icon: BarChart,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full bg-gradient-to-br from-background via-gradient-purple to-gradient-green py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Mis Habilidades</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A lo largo de mi carrera, he desarrollado un conjunto diverso de habilidades que me permiten abordar desafíos complejos en el análisis de datos. Mis áreas de especialización incluyen:
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="grid gap-2 text-center md:text-left md:grid-cols-[auto_1fr] md:gap-4 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="rounded-full bg-primary/10 p-4 text-primary">
                  <skill.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold font-headline">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
