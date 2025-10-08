'use client';

import { useRouter } from 'next/navigation';
import { FaEdit } from 'react-icons/fa';

interface Props {
  articleId: string;
  className?: string;
}

const EditButton = ({
  articleId,
  className = '',
}: Props): React.JSX.Element => {
  const router = useRouter();

  const handleEditClick = () => {
    // Navigate to edit page - assuming we'll create an edit route
    router.push(`/rate/articles/${articleId}/edit`);
  };

  return (
    <button
      onClick={handleEditClick}
      className={`flex items-center gap-2 px-3 py-1 bg-slate-300 text-slate-900 rounded-xl hover:bg-slate-400 transition-colors ${className}`}
    >
      <FaEdit />
      編輯
    </button>
  );
};

export default EditButton;
