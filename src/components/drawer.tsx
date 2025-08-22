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

    const drawer = listRef.current;
    const saveScroll = () => {
      if (drawer)
        sessionStorage.setItem(storageKey, String(drawer.scrollTop));
    };
    drawer?.addEventListener('scroll', saveScroll);

    return () => {
      saveScroll();
      drawer?.removeEventListener('scroll', saveScroll);
    };
  }, [storageKey]);

  return (
    <div className="fixed top-20 left-0 xl:relative xl:top-0">
      <div className="drawer xl:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex xl:hidden">
          <label
            htmlFor="my-drawer"
            className="btn gray-900 border-gray-500 border-2 rounded-lg hover:bg-slate-600"
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
            className="menu overflow-y-auto flex-nowrap backdrop-blur-xl bg-opacity-30 space-y-2
                       xl:bg-white/5 p-4 font-bold text-xl
                       xl:border-2 xl:rounded-2xl flex flex-col w-64 h-screen xl:h-2/3"
          >

            <li className="mt-20 xl:mt-0 invisible" />

            {choices.map(choice => (
              <li key={choice.value}>
                <Link
                  href={choice.value}
                  className={
                    selected === choice.description
                      ? 'bg-gray-700 text-white py-1 px-2 border-b-2 rounded-xl block text-center'
                      : 'hover:text-white py-1 px-2 block text-center'
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
