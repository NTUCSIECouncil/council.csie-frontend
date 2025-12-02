'use client';

import { useRouter } from 'next/navigation';

interface Props {
  tag: string;
  style?: 'text' | 'default';
}

const ClickableTag = ({ tag, style = 'default' }: Props): React.JSX.Element => {
  const router = useRouter();

  const handleTagClick = () => {
    router.push(`/rate/filter-results?tags=${encodeURIComponent(tag)}`);
  };

  return (
    <button
      onClick={handleTagClick}
      className={
        style === 'default' ? "py-1 px-2 rounded bg-cyan-900 text-white text-sm hover:bg-cyan-800 transition-colors cursor-pointer"
        : "font-bold text-blue-300 underline underline-offset-3 decoration-dotted transition-colors text-left cursor-pointer"
      }
    >
      {tag}
    </button>
  );
};

export default ClickableTag;
