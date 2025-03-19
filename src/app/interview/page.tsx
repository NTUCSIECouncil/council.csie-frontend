'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import professorsData from '@/posts/professors.json';

interface Professor {
  category: string;
  chin_name: string;
  eng_name: string;
  lab: string;
  tags: string[];
  links?: { url: string; label: string }[];
}

const professors: Professor[] = professorsData;

const Page = (): React.JSX.Element => {
  const router = useRouter();

  const handleButtonClick = (url: string) => {
    if (url) {
      // md file url: YYYY-MM-DD-category.md OR YYYY-category.md
      const regex = /^(\d{4})-(.+)\.md$/;
      const match = regex.exec(url);
      if (match) {
        const year = match[1];
        const file = match[2];
        router.push(`/interview/${year}/${file}`);
      } else {
        console.error('Invalid URL format:', url);
      }
    }
  };

  return (
    <div className="flex justify-center mt-12 mb-16">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-4 gap-4">
          {professors.map((teacher, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-white/15 rounded-2xl"
            >
              <div className="flex flex-col items-center p-4">
                <Image
                  alt={teacher.eng_name}
                  src={`/teacher_img/${teacher.category}.png`}
                  width={128}
                  height={128}
                  className="w-32 h-32 mb-2 rounded-full"
                />
                <h3 className="text-white text-lg font-bold text-center">{teacher.chin_name}</h3>
                <p className="text-white font-bold text-center">{teacher.eng_name}</p>
                <p className="text-gray-400 text-sm text-center uppercase">{teacher.lab}</p>
                <div className="mt-2 flex flex-wrap justify-center">
                  {teacher.links?.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => { handleButtonClick(link.url); }}
                      className="bg-violet-500 hover:bg-violet-800 text-white px-3 py-1 rounded-full mr-2 mb-2 transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
                <div className="flex items-center w-full">
                  <div className="flex-grow border-t border-gray-500"></div>
                  <span className="px-2 text-gray-500 italic text-xs">tags</span>
                  <div className="flex-grow border-t border-gray-500"></div>
                </div>
                <div className="mt-2 flex flex-wrap justify-center">
                  {teacher.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="bg-cyan-500 italic text-xs text-white px-3 py-1 rounded-full mx-1 mb-2"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
