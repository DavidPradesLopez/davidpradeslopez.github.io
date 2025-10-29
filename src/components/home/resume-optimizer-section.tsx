'use client';

import { useActionState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Bot } from 'lucide-react';
import { optimizeResumeAction } from '@/app/actions';
import { PendingButton } from './pending-button';

const initialState = {
  suggestions: null,
  error: null,
};

export default function ResumeOptimizerSection() {
  const [state, formAction] = useActionState(optimizeResumeAction, initialState);

  return (
    <section id="resume-optimizer" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-3xl space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              Potenciado por IA
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Optimiza tu CV con IA</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Pega tu currículum y la descripción de un puesto para recibir sugerencias personalizadas que te ayudarán a destacar.
            </p>
          </div>
        </div>
        <Card className="shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <form action={formAction} className="space-y-6">
              <div className="grid w-full gap-2">
                <Label htmlFor="resumeText" className="text-lg font-headline">Tu Currículum</Label>
                <Textarea
                  id="resumeText"
                  name="resumeText"
                  placeholder="Pega aquí el texto de tu currículum..."
                  className="min-h-[200px]"
                  required
                />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="jobDescription" className="text-lg font-headline">Descripción del Puesto</Label>
                <Textarea
                  id="jobDescription"
                  name="jobDescription"
                  placeholder="Pega aquí la descripción del puesto de trabajo..."
                  className="min-h-[200px]"
                  required
                />
              </div>
              <PendingButton buttonText="Optimizar con IA" />
            </form>
          </CardContent>
        </Card>
        {state?.error && (
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}
        {state?.suggestions && (
          <Card className="mt-8 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-primary flex items-center gap-2"><Bot /> Sugerencias de Optimización</CardTitle>
              <CardDescription>Aquí tienes algunas ideas para mejorar tu CV para este puesto:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none whitespace-pre-wrap rounded-md bg-muted p-4 text-muted-foreground">
                {state.suggestions}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
