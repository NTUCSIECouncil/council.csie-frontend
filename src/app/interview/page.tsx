'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { sidebar } from '@/helpers/sidebar';
// import professors from '@/posts/professors.json';

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
      <div className="w-11/12 md:w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {professors.map((teacher, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-white/15 rounded-2xl"
            >
              <div className="flex flex-row md:flex-col items-center p-4">
                <Image
                  alt={teacher.eng_name}
                  src={`/teacher_img/${teacher.category}.png`}
                  width={128}
                  height={128}
                  className="object-cover object-top w-16 h-16 md:w-32 md:h-32 md:mb-2 mx-4 md:mx-0 rounded-full"
                />
                <div className="w-10/12 md:w-full">
                  <h3 className="text-white text-lg font-bold md:text-center">{teacher.chin_name}</h3>
                  <p className="text-white font-bold md:text-center">{teacher.eng_name}</p>
                  <p className="text-gray-400 text-xs md:text-sm md:text-center uppercase">{teacher.lab}</p>
                </div>

                <div className="md:mt-2 flex flex-wrap justify-center w-full">
                  {/* Desktop */}
                  <div className="hidden md:flex flex-wrap justify-center">
                    {teacher.links?.map((link, linkIndex) => (
                      <button
                        key={linkIndex}
                        onClick={() => { handleButtonClick(link.url); }}
                        className="bg-violet-500 hover:bg-violet-800 text-white px-3 py-1 rounded-full md:mr-2 mb-2 transition-colors duration-300"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                  {/* Mobile */}
                  <Menu as="div" className="md:hidden relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex justify-center gap-x-1.5 bg-violet-500 hover:bg-violet-800 text-white px-6 py-1 rounded-2xl">
                        Interviews
                        <svg className="ml-1 -mr-1 size-6 text-white" viewBox="0 0 20 20" fill="currentColor" data-slot="icon">
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                      </MenuButton>
                    </div>

                    <MenuItems
                      className="absolute w-full mt-2 z-10 rounded-2xl bg-black/70 shadow-lg transition-all duration-200 ease-out transform scale-95 opacity-0 data-[headlessui-state=open]:scale-100 data-[headlessui-state=open]:opacity-100"
                    >
                      <div>
                        {teacher.links?.map((link, linkIndex) => (
                          <MenuItem
                            key={linkIndex}
                            as="button"
                            onClick={() => { handleButtonClick(link.url); }}
                            className="py-1 block w-full text-md text-white text-center hover:bg-violet-200 hover:text-gray-800 hover:rounded-2xl data-[headlessui-state=active]:bg-gray-200"
                          >
                            {link.label}
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Menu>
                </div>

                <div className="hidden md:block">
                  <div className="flex items-center w-full">
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="px-2 text-gray-500 italic text-xs">tags</span>
                    <div className="flex-grow border-t border-gray-500"></div>
                  </div>
                  <div className="mt-2 flex flex-wrap md:justify-center">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
