'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm('xrbokkvd');

  if (state.succeeded) {
    return (
      <section id="contact" className="w-full bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-green py-12 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">¡Gracias!</h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <p>Tu mensaje ha sido enviado correctamente. Te responderé lo antes posible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


  return (
    <section id="contact" className="w-full bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-green py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">¡Conectemos!</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si deseas discutir un proyecto, una idea o simplemente conectar, no dudes en contactarme.
            </p>
          </div>
        </div>
        <Card className="mt-8 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" placeholder="Tu nombre" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Tu mensaje" className="min-h-[100px]" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-sm" />
              </div>
              <Button type="submit" disabled={state.submitting} className="w-full">
                {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

