'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Link {
  url: string;
  label: string;
}

interface TeacherInfo {
  image: string;
  nameZh: string;
  nameEn: string;
  labName: string;
  links: Link[];
}

const Page = (): React.JSX.Element => {
  const router = useRouter();

  const handleButtonClick = (url: string, imageUrl: string) => {
    if (url) {
      router.push(`/interview/${url}?image=${encodeURIComponent(imageUrl)}`);
    }
  };

  const data: TeacherInfo[] = [
    {
      image: '/teacher_img/Ht_lin.png',
      nameZh: '林軒田',
      nameEn: 'Hsuan-Tien Lin',
      labName: 'COMPUTATIONAL LEARNING LAB',
      links: [
        { url: '2023-04-26-Ht_lin.md', label: '2021' },
        { url: '2023-04-26-Ht_lin.md', label: '2022' },
        { url: '2023-04-26-Ht_lin.md', label: '2023' },
      ],
    },
    {
      image: '/teacher_img/Ht_lin.png',
      nameZh: '林軒田1',
      nameEn: 'Hsuan-Tien Lin',
      labName: 'COMPUTATIONAL LEARNING LAB',
      links: [
        { url: '2023-04-26-Ht_lin.md', label: '2023' },
      ],
    },
    {
      image: '/teacher_img/Ht_lin.png',
      nameZh: '林軒田2',
      nameEn: 'Hsuan-Tien Lin',
      labName: 'COMPUTATIONAL LEARNING LAB',
      links: [
        { url: '2023-04-26-Ht_lin.md', label: '2023' },
      ],
    },
    {
      image: '/teacher_img/Ht_lin.png',
      nameZh: '林軒田3',
      nameEn: 'Hsuan-Tien Lin',
      labName: 'COMPUTATIONAL LEARNING LAB',
      links: [
        { url: '2023-04-26-Ht_lin.md', label: '2023' },
      ],
    },
    {
      image: '/teacher_img/Ht_lin.png',
      nameZh: '林軒田4',
      nameEn: 'Hsuan-Tien Lin',
      labName: 'COMPUTATIONAL LEARNING LAB',
      links: [
        { url: '2023-04-26-Ht_lin.md', label: '2023' },
      ],
    },
  ];

  return (
    <div className="flex justify-center mt-12">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-4 gap-4">
          {data.map((teacher, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-white/15 rounded-2xl"
            >
              <div className="flex flex-col items-center p-4">
                <Image
                  alt={teacher.nameEn}
                  src={teacher.image}
                  width={128}
                  height={128}
                  className="w-32 h-32 mb-2 rounded-full"
                />
                <h3 className="text-white text-lg font-bold text-center">{teacher.nameZh}</h3>
                <p className="text-white font-bold text-center">{teacher.nameEn}</p>
                <p className="text-gray-400 text-sm text-center">{teacher.labName}</p>
                <div className="mt-2 flex flex-wrap justify-center">
                  {teacher.links.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => { handleButtonClick(link.url, teacher.image); }}
                      className="bg-violet-500 hover:bg-violet-800 text-white px-3 py-1 rounded-full mr-2 mb-2 transition-colors duration-300"
                    >
                      {link.label}
                    </button>
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
