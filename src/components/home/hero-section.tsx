import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'david-prades-headshot');

  return (
    <section className="w-full bg-gradient-to-br from-background via-gradient-purple to-gradient-green py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start justify-center space-y-4">
            <h1 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              Bienvenido a Mi Portfolio
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Hola, soy David Prades López, un apasionado analista de datos con más de 15 años de experiencia en el sector retail. A lo largo de mi carrera, he tenido la oportunidad de trabajar con marcas reconocidas como H&M y Hefadi, donde he desarrollado habilidades clave en optimización del rendimiento comercial, gestión financiera estratégica y mejora de la experiencia del cliente. Actualmente, estoy en búsqueda de nuevas oportunidades para seguir creciendo y desarrollándome como analista de datos.
            </p>
             <div className="flex gap-4">
              <Button asChild>
                <Link href="#contact">Contacta conmigo</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#projects">
                  Ver proyectos <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden rounded-full shadow-2xl">
              <CardContent className="p-0">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    data-ai-hint={heroImage.imageHint}
                    priority
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

