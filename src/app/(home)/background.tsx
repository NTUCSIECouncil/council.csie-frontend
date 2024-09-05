import Image from 'next/image';
import building from '@public/building.jpg';

const Background = (): React.JSX.Element => {
  return (
    <Image
      alt="Background(Der Tian Hall)."
      src={building}
      placeholder="blur"
      // quality={100}
      fill
      className="object-cover brightness-[80%]"
    />
  );
};

export default Background;
