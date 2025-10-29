'use client';

import { useActionState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactMessageAction } from '@/app/actions';
import { PendingButton } from './pending-button';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { Terminal } from 'lucide-react';

const initialState = {
  message: null,
  error: null,
};

export default function ContactSection() {
  const [state, formAction] = useActionState(sendContactMessageAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: '¡Éxito!',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-background via-gradient-purple to-gradient-green py-12 md:py-24 lg:py-32">
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
            <form action={formAction} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Tu mensaje" className="min-h-[100px]" required />
              </div>
              <PendingButton buttonText="Enviar Mensaje" />
            </form>
          </CardContent>
        </Card>
        {state?.error && (
          <Alert variant="destructive" className="mt-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}
      </div>
    </section>
  );
}
