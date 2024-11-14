'use client';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

interface FetchMarkdownResponse {
  content: string;
  error?: string;
}

const Page = (): React.JSX.Element => {
  const { file } = useParams();
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get('image');
  const [mdContent, setMdContent] = useState<string>('');

  useEffect(() => {
    if (typeof file === 'string') {
      const fetchMarkdownContent = async () => {
        try {
          const response = await fetch(`/api/md-files?file=${file}`);
          const data = (await response.json()) as FetchMarkdownResponse;

          if (data.error) {
            setMdContent(`Error: ${data.error}`);
          } else {
            setMdContent(data.content);
          }
        } catch {
          setMdContent('Error: Failed to fetch markdown content.');
        }
      };

      void fetchMarkdownContent();
    }
  }, [file]);

  return (
    <div className="prose container max-w-screen-lg mx-auto m-12 p-12 rounded-2xl bg-white/15 text-white/70 relative">
      {imageUrl && (
        <Image
          alt="Teacher Image"
          src={imageUrl}
          width={256}
          height={256}
          className="w-64 h-64 rounded-full absolute top-8 right-12 m-4"
        />
      )}
      <Markdown className="relative z-10">
        {mdContent}
      </Markdown>
    </div>
  );
};

export default Page;
