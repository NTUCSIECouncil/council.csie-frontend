import Image from 'next/image';
import React from 'react';

interface LifeEventProps {
  title: string;
  description: string;
  image: string;
}

const LifeEvent = ({ title, description, image }: LifeEventProps): React.JSX.Element => {
  return (
    <div className="mb-10 mt-10">
      <div className="bg-white text-[#1c1c29] text-2xl py-1 px-3 font-extrabold rounded-xl my-2 w-fit">
        {title}
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        <div className="whitespace-pre-line text-lg md:flex-1 text-justify">
          {description}
        </div>
        <div className="relative md:w-[320px] aspect-[4/3] flex-shrink-0">
          <Image
            src={image}
            alt=""
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LifeEvent;
