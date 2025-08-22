import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  // Warning: Putting server-side and client-side variables in the same place is convenient but
  // can lead to security issues. If the variable names are sensitive, move them out.
  server: {
    API_BASE_URL: z.url(),
  },
  client: {
  },
  // For Next.js, we need to destructure client variables:
  experimental__runtimeEnv: {
  },
});
