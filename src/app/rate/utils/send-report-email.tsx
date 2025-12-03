import { Resend } from 'resend';

import { ExamUploadEmail } from '@/app/rate/components/report-email';

export interface ExtraInfo extends Record<string, string> {}

const resend = new Resend(process.env.RESEND_API_KEY); //need to change the API key to council's API key

export async function sendExamUploadMail(options: { info: ExtraInfo }) {
  const { info } = options;

  const { data, error } = await resend.emails.send({
    from: 'report rate <onboarding@resend.dev>',
    to: '0501dylan.andromeda@gmail.com', //change to council's email
    subject: 'upload Exam',
    react: ExamUploadEmail({ info }),
  });

  if (error) {
    console.error('sendExamUploadMail error:', error);
    throw new Error(error.message);
  }

  return data;
}
