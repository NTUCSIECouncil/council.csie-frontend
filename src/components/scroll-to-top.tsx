'use client';
import { FaArrowUp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => { window.removeEventListener('scroll', toggleVisibility); };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-3 h-12 w-12 z-30 flex justify-center rounded-full bg-slate-500 text-white shadow-lg hover:bg-slate-400 transition"
      >
        <FaArrowUp className="mt-1" />
      </button>
    )
  );
};

export default ScrollToTopButton;
