'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa6';

interface Choice {
  value: string;
  description: string;
}
interface Props {
  choices: Choice[];
  selected: string;
}

const Drawer = ({ choices, selected }: Props): React.JSX.Element => {
  const listRef = useRef<HTMLUListElement>(null);
  const storageKey = 'drawer-scroll';
  useEffect(() => {
    if (typeof window !== 'undefined' && listRef.current) {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) listRef.current.scrollTop = parseInt(saved, 10);
    }

    const saveScroll = () => {
      if (listRef.current)
        sessionStorage.setItem(storageKey, String(listRef.current.scrollTop));
    };
    listRef.current?.addEventListener('scroll', saveScroll);

    return () => {
      saveScroll();
      listRef.current?.removeEventListener('scroll', saveScroll);
    };
  }, [storageKey]);

  return (
    <div className="fixed top-20 left-0 xl:relative xl:top-0">
      <div className="drawer xl:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex xl:hidden">
          <label
            htmlFor="my-drawer"
            className="btn gray-900 border-gray-500 border-2 hover:bg-slate-600"
          >
            <FaBars />
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul
            ref={listRef}
            className="menu flex-nowrap overflow-y-scroll backdrop-blur-xl bg-opacity-30
                       xl:bg-base-200 text-base-content p-4 font-bold text-xl
                       xl:border-2 xl:rounded-2xl w-64 h-[100%] xl:h-[70%]"
          >

            <li className="mt-20 xl:mt-0 invisible" />

            {choices.map(choice => (
              <li key={choice.value}>
                <Link
                  href={choice.value}
                  className={
                    selected === choice.description
                      ? 'justify-center bg-gray-700 text-white text-center border-b-2'
                      : 'justify-center text-center hover:text-white'
                  }
                >
                  {choice.description}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
