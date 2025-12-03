import { Resend } from 'resend';

import { ExamUploadEmail } from '@/app/database/components/exam-upload-mail';

export interface ExtraInfo extends Record<string, string> {}

export interface ExamFilePayload {
  name: string;
  contentBase64: string;
}

const resend = new Resend(process.env.RESEND_API_KEY); //need to change the API key to council's API key

export async function sendExamUploadMail(options: {
  info: ExtraInfo;
  files: ExamFilePayload[];
}) {
  const { info, files } = options;

  const fileNames = files.map(f => f.name);

  const { data, error } = await resend.emails.send({
    from: 'uploadexam <onboarding@resend.dev>',
    to: '0501dylan.andromeda@gmail.com', //change to council's email
    subject: 'upload Exam',
    react: ExamUploadEmail({ info, fileNames }),
    attachments: files.map(f => ({
      filename: f.name,
      content: Buffer.from(f.contentBase64, 'base64'),
    })),
  });

  if (error) {
    console.error('sendExamUploadMail error:', error);
    throw new Error(error.message);
  }

  return data;
}
