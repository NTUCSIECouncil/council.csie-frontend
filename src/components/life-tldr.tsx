import { FaLightbulb } from 'react-icons/fa';

const TLDR = ({
  content,
}: {
  content: string;
}): React.JSX.Element => {
  return (
    <div className="w-full rounded-lg bg-white bg-opacity-10 p-2 my-3 flex flex-row items-center gap-2">
      <FaLightbulb className="text-3xl" />
      <p className="text-xl font-bold">
        懶人包：
        {content}
      </p>
    </div>
  );
};

export default TLDR;
