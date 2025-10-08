'use client';

import { useRouter } from 'next/navigation';

interface Props {
  tag: string;
}

const ClickableTag = ({ tag }: Props): React.JSX.Element => {
  const router = useRouter();
  
  const handleTagClick = () => {
    router.push(`/rate/filter-results?tags=${encodeURIComponent(tag)}`);
  };

  return (
    <button
      onClick={handleTagClick}
      className="py-1 px-2 rounded bg-cyan-900 text-white text-sm hover:bg-cyan-800 transition-colors cursor-pointer"
    >
      {tag}
    </button>
  );
};

export default ClickableTag;