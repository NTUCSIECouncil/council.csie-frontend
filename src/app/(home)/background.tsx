import Image from 'next/image';
import building from '@public/building.jpg';

const Background = (): React.JSX.Element => {
  return (
    <Image
      alt="Background (Der Tian Hall)"
      src={building}
      layout="fill"
      objectFit="cover"
      className="brightness-[75%]"
      // className="brightness-[75%] filter blur-[1px]"
      quality={90}
    />
  );
};

export default Background;
