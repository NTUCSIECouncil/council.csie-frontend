'use client';
import { useEffect } from 'react';

interface Props {
  onClose: () => void;
}

const SearchFilterPanel = ({ onClose }: Props): React.JSX.Element => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => { window.removeEventListener('keydown', onKeyDown); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[600px] max-w-full" onClick={(e) => { e.stopPropagation(); }}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Tags</h2>
        <p className="text-gray-600 text-center">(Not Implemented)</p>
        <button
          className="mt-6 block mx-auto px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition"
          onClick={onClose}
        >
          關閉
        </button>
      </div>
    </div>
  );
};

export default SearchFilterPanel;
