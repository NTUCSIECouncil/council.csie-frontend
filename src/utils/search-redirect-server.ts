import { redirect } from 'next/navigation';

export default function searchRedirectServer(newURL: string) {
  return async (formData: FormData) => {
    'use server';
    const params = new URLSearchParams();
    for (const key of formData.keys()) {
      if (typeof key === 'string')
        if (formData.get(key) !== null && formData.get(key) !== '')
          params.append(key, formData.get(key) as string);
    }

    await new Promise((resolve) => { resolve(0); });

    redirect(newURL + '?' + params.toString());
  };
}
