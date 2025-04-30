import { FaLightbulb } from 'react-icons/fa';

const TLDR = ({
  content,
}: {
  content: string;
}): React.JSX.Element => {
  return (
    <div className="w-full rounded-lg bg-yellow-300 bg-opacity-40 p-2 my-3 flex flex-row items-center gap-2">
      <FaLightbulb className="text-3xl mx-2" />
      <p className="text-xl font-bold">
        懶人包：
        {content}
      </p>
    </div>
  );
};

export default TLDR;
