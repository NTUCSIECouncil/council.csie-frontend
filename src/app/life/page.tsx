import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import buildingImage from '@public/building_original.jpg';

const Page: FC = () => {
  return (
    <main className="m-auto md:w-2/3">
      <h1 className="text-6xl font-bold text-center py-4">德田生活</h1>
      <div className="flex flex-col items-center gap-2">
        <Link href="/">
          <Image
            alt="Background(Der Tian Hall)."
            src={buildingImage}
            placeholder="blur"
            // quality={100}
            className="w-full"
          />
        </Link>
      </div>
    </main>
  );
};

export default Page;
