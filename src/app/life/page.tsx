import Image from 'next/image';
import { NavCards } from '@/app/life/components/nav-cards';
import { lifePages } from '@/utils/constants';
import building from '@public/building.jpg';

const Page = (): React.JSX.Element => {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <Image
          alt="Background (Der Tian Hall)"
          src={building}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-1000 blur-md brightness-75"
          quality={90}
        />
      </div>
      <div className="relative z-10 pt-40 pb-80">
        <div className="container mx-auto px-4">
          <NavCards pages={lifePages} />
        </div>
      </div>
    </>
  );
};

export default Page;
