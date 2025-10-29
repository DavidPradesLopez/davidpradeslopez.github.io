'use server';
import { z } from 'zod';
import { Resend } from 'resend';

interface ContactFormState {
  message: string | null;
  error: string | null;
}

const ContactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('El correo electrónico no es válido.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export async function sendContactMessageAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validation = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validation.success) {
    return {
      message: null,
      error: validation.error.errors.map((e) => e.message).join(', '),
    };
  }

  const { name, email, message } = validation.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'davidpradeslopez@gmail.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      reply_to: email,
      html: `
        <p>Has recibido un nuevo mensaje de tu portfolio:</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return {
        message: null,
        error: `Hubo un error al enviar el mensaje: ${error.message}`,
      };
    }

    return {
      message: 'Mensaje enviado con éxito. ¡Gracias por contactar!',
      error: null,
    };
  } catch (exception: any) {
    console.error(exception);
    return {
      message: null,
      error: `Hubo un error inesperado: ${exception.message || 'Por favor, inténtalo de nuevo.'}`,
    };
  }
}

export async function optimizeResumeAction(
  prevState: { suggestions: string | null; error: string | null },
  formData: FormData
): Promise<{ suggestions: string | null; error: string | null }> {
  try {
    const resumeText = formData.get('resumeText') as string;
    const jobDescription = formData.get('jobDescription') as string;

    if (!resumeText || !jobDescription) {
      return { suggestions: null, error: 'Por favor, completa ambos campos.' };
    }

    const { optimizeResumeWithAI } = await import('@/ai/flows/optimize-resume-with-ai');
    const result = await optimizeResumeWithAI({ resumeText, jobDescription });

    return {
      suggestions: result.optimizedResumeSuggestions,
      error: null,
    };
  } catch (e: any) {
    console.error(e);
    return {
      suggestions: null,
      error: 'Hubo un error al optimizar el CV. Por favor, inténtalo de nuevo.',
    };
  }
}
