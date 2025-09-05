import { redirect } from 'next/navigation';

import interviewData from '@/data/life/interview';

export default function Page() {
  // Redirect to the first professor's interview page
  redirect(`/life/interview/${Object.keys(interviewData)[0]}`);
}
