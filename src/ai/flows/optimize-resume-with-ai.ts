'use server';

/**
 * @fileOverview A resume optimization AI agent.
 *
 * - optimizeResumeWithAI - A function that handles the resume optimization process.
 * - OptimizeResumeWithAIInput - The input type for the optimizeResumeWithAI function.
 * - OptimizeResumeWithAIOutput - The return type for the optimizeResumeWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeResumeWithAIInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be optimized.'),
  jobDescription: z.string().describe('The job description for the target role.'),
});
export type OptimizeResumeWithAIInput = z.infer<typeof OptimizeResumeWithAIInputSchema>;

const OptimizeResumeWithAIOutputSchema = z.object({
  optimizedResumeSuggestions: z
    .string()
    .describe('Suggestions on how to improve the resume to better match the job description.'),
});
export type OptimizeResumeWithAIOutput = z.infer<typeof OptimizeResumeWithAIOutputSchema>;

export async function optimizeResumeWithAI(input: OptimizeResumeWithAIInput): Promise<OptimizeResumeWithAIOutput> {
  return optimizeResumeWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeResumeWithAIPrompt',
  input: {schema: OptimizeResumeWithAIInputSchema},
  output: {schema: OptimizeResumeWithAIOutputSchema},
  prompt: `You are an expert resume optimizer. Given a resume and a job description, provide suggestions on how to improve the resume to better match the job description.

Resume:
{{resumeText}}

Job Description:
{{jobDescription}}

Suggestions:
`, config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const optimizeResumeWithAIFlow = ai.defineFlow(
  {
    name: 'optimizeResumeWithAIFlow',
    inputSchema: OptimizeResumeWithAIInputSchema,
    outputSchema: OptimizeResumeWithAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
