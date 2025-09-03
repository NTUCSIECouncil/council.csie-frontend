import fs from 'fs';
import path from 'path';

import * as z from 'zod';

const ProfessorInterviewDataContent = z.object({
  subtopic: z.string(),
  answers: z.array(z.string()),
  links: z
    .array(
      z.object({
        name: z.string(),
        href: z.url(),
      }),
    )
    .optional(),
});
export const ProfessorInterviewData = z.object({
  title: z.string(),
  mailto: z.email(),
  website: z.url(),
  author: z.string(),
  image: z.string(),
  content: z.array(ProfessorInterviewDataContent),
});

const interviewData: Record<
  string,
  z.infer<typeof ProfessorInterviewData>
> = {};
const professorsDir = path.join(
  process.cwd(),
  'src',
  'data',
  'life',
  'interview',
  'professors',
);
fs.readdirSync(professorsDir).forEach(file => {
  if (file.endsWith('.json')) {
    const filePath = path.join(professorsDir, file);
    const professorName = path.basename(file, '.json');
    try {
      interviewData[professorName] = ProfessorInterviewData.parse(
        JSON.parse(fs.readFileSync(filePath, 'utf-8')),
      );
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new Error(
          `Invalid data for professor ${professorName}:\n${z.prettifyError(error)}`,
        );
      }
      throw new Error(
        `Invalid data for professor ${professorName}:\n${String(error)}`,
      );
    }
  }
});

export default interviewData;
