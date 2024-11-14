/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import matter from 'gray-matter';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

interface FrontMatter {
  title: string;
  category: string;
}

interface FetchMarkdownResponse {
  content: string;
  error?: string;
}

const Page = (): React.JSX.Element => {
  const { file } = useParams();
  const [mdContent, setMdContent] = useState<string>('');
  const [frontMatter, setFrontMatter] = useState<FrontMatter | null>(null);

  useEffect(() => {
    if (typeof file === 'string') {
      const fetchMarkdownContent = async () => {
        try {
          const response = await fetch(`/api/md-files?file=${file}`);
          const data = (await response.json()) as FetchMarkdownResponse;

          if (data.error) {
            setMdContent(`Error: ${data.error}`);
          } else {
            const { content, data: frontMatterData } = matter(data.content);
            setMdContent(content);
            setFrontMatter(frontMatterData as FrontMatter);
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
      {frontMatter?.category && (
        <Image
          alt="Teacher Image"
          src={`/teacher_img/${frontMatter.category}.png`}
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
