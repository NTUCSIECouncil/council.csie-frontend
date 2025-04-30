import React from 'react';

interface LifeEventProps {
  title: string;
  description: string;
  image: string;
}

const LifeEvent = ({ title, description, image }: LifeEventProps): React.JSX.Element => {
  return (
    <div className="mb-8">
      <div className="bg-white text-[#1c1c29] text-2xl py-1 px-3 font-extrabold rounded-xl my-2 w-fit">
        {title}
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <div className="whitespace-pre-line text-lg md:flex-1">
          {description}
        </div>
        <div className="flex justify-center md:justify-end md:w-[320px]">
          <img
            src={image}
            className="rounded-xl object-cover max-w-full h-auto self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default LifeEvent;
