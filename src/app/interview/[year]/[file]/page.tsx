import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface FrontMatter {
  title: string;
  category: string;
}

interface PageProps {
  params: Promise<{
    year: string;
    file: string;
  }>;
}

const Page = async (props: PageProps) => {
  const params = await props.params;
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
      <div className="prose container max-w-screen-lg mx-auto px-6 md:m-12 md:p-12 md:rounded-2xl bg-white/15 text-white/70 relative">
        {/* Desktop */}
        <div className="hidden md:flex">
          {frontMatter.category && (
            <Image
              alt="Teacher Image"
              src={`/teacher_img/${frontMatter.category}.png`}
              height={128}
              width={128}
              className="object-cover object-top w-48 h-48 rounded-full absolute top-8 right-12 m-4"
            />
          )}
        </div>
        {/* Mobile */}
        <div className="md:hidden">
          {frontMatter.category && (
            <Image
              alt="Teacher Image"
              src={`/teacher_img/${frontMatter.category}.png`}
              height={128}
              width={128}
              className="object-cover object-top w-full aspect-square"
            />
          )}
        </div>
        {/* rehypePlugins={[rehypeRaw]} is used to render raw HTML in markdown */}
        <Markdown className="relative z-10 break-words" rehypePlugins={[rehypeRaw]}>{content}</Markdown>
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
