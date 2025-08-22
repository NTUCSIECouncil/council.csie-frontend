import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  // Warning: Putting server-side and client-side variables in the same place is convenient but
  // can lead to security issues. If the variable names are sensitive, move them out.
  server: {
    API_BASE_URL: z.url(),
  },
  client: {
    NEXT_PUBLIC_ENABLE_DEVELOPING_PAGES: z.stringbool(),
    NEXT_PUBLIC_ENABLE_LOGIN: z.stringbool(),
  },
  // For Next.js, we need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_ENABLE_DEVELOPING_PAGES: process.env.NEXT_PUBLIC_ENABLE_DEVELOPING_PAGES,
    NEXT_PUBLIC_ENABLE_LOGIN: process.env.NEXT_PUBLIC_ENABLE_LOGIN,
  },
});
