import Image from 'next/image';
import Link from 'next/link';
import buildingImage from '@public/building_original.jpg';

const Page = (): React.JSX.Element => {
  const sections = [
    { title: '教授及幹事訪談', href: '/' },
    { title: '系學會', href: '/life/council' },
    { title: '系館空間', href: '/' },
    { title: '課程資訊', href: '/' },
    { title: '生活資訊', href: '/life/information/internet' },
    { title: 'NASA', href: '/' },
  ];

  return (
    <main className="m-auto md:w-2/3">
      <h1 className="text-5xl font-bold text-center py-12">德田生活</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">
        {sections.map((section, index) => (
          <Link
            href={section.href}
            key={index}
            className="bg-card text-text p-6 rounded-md shadow-md flex flex-col items-center w-full max-w-sm m-auto"
          >
            <Image
              alt="Background(Der Tian Hall)."
              src={buildingImage}
              placeholder="blur"
              className="w-64 h-64 mb-4 self-start p-1"
            />
            <h2 className="text-xl font-bold self-start">{section.title}</h2>
            <p className="text-sm text-text-secondary mt-2">
              Body text for whatever you&apos;d like to say. Add main takeaway points, quotes, anecdotes, or even a very
              very short story.
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
