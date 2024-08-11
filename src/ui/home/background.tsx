import Image from 'next/image';
import building from '@public/building.jpg';

const Background = (): JSX.Element => {
  return (
    <Image
      alt="Der Tian Hall"
      src={building}
      placeholder="blur"
      quality={100}
      fill
      className="bg-cover"
    />
  );
};

export default Background;
