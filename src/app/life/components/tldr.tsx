import { FaLightbulb } from 'react-icons/fa';

const TLDR = ({ content }: { content: string }): React.JSX.Element => {
  return (
    <div className="w-full rounded-lg bg-yellow-300/40 p-2 my-3 flex flex-col items-start gap-2">
      <div className="flex flex-row justify-start items-center w-full">
        <FaLightbulb className="text-xl mx-2" />
        <p className="text-xl font-bold">懶人包</p>
      </div>
      <p className="px-2">{content}</p>
    </div>
  );
};

export default TLDR;
