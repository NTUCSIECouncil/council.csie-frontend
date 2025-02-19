import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Markdown from 'react-markdown';

interface FrontMatter {
  title: string;
  category: string;
}

interface PageProps {
  params: {
    year: string;
    file: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { year, file } = params;

  const postsDir = path.join(process.cwd(), 'src', 'posts', '_posts', year);
  const files = fs.readdirSync(postsDir);
  const markdownFile = files.find(filename =>
    filename.endsWith(`-${file}.md`)
  );

  if (!markdownFile) {
    return <div>Error: Markdown file not found.</div>;
  }

  const filePath = path.join(postsDir, markdownFile);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data: frontMatterData } = matter(fileContent);
    const frontMatter = frontMatterData as FrontMatter;

    return (
      <div className="prose container max-w-screen-lg mx-auto m-12 p-12 rounded-2xl bg-white/15 text-white/70 relative">
        {frontMatter.category && (
          <Image
            alt="Teacher Image"
            src={`/teacher_img/${frontMatter.category}.png`}
            width={256}
            height={256}
            className="w-64 h-64 rounded-full absolute top-8 right-12 m-4"
          />
        )}
        <Markdown className="relative z-10">{content}</Markdown>
      </div>
    );
  } catch (_) {
    return <div>Error: Failed to load markdown content.</div>;
  }
};

export default Page;

export function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src', 'posts', 'posts_');
  const years = ['2020', '2021', '2022', '2023'];
  const params = [];

  for (const year of years) {
    const yearDir = path.join(postsDir, year);
    if (fs.existsSync(yearDir)) {
      const files = fs.readdirSync(yearDir);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const regex = /^\d{4}-\d{2}-\d{2}-(.+)\.md$/;
          const match = regex.exec(file);
          if (match) {
            const fileName = match[1];
            params.push({ year, file: fileName });
          }
        }
      }
    }
  }

  return params;
}
