'use client';

import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function searchRedirect(
  router: AppRouterInstance,
  newURL: string,
) {
  return (formData: FormData) => {
    const params = new URLSearchParams();
    for (const key of formData.keys()) {
      if (typeof key === 'string')
        if (formData.get(key) !== null && formData.get(key) !== '')
          params.append(key, formData.get(key) as string);
    }

    router.push(newURL + '?' + params.toString());
  };
}
