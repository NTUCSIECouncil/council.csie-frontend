import Image from 'next/image';
import building from '@public/building.jpg';

const Background = (): JSX.Element => {
  return (
    <Image
      alt="Background(Der Tian Hall)."
      src={building}
      placeholder="blur"
      // quality={100}
      className="object-cover w-1/4 min-w-96 h-full absolute right-0 top-0"
    />
  );
};

export default Background;
