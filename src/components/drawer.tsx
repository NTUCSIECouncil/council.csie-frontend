import { FaBars } from 'react-icons/fa6';
const Drawer = ({
  choices,
}: {
  choices: {
    value: string;
    description: string;
  }[];
}): React.JSX.Element => {
  return (
    <div className="drawer absolute top-20 left-0 z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn gray-900 border-gray-500 border-2"><FaBars></FaBars></label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 mt-20 p-4 font-bold text-xl">
          {choices.map(choice => (
            <li key={choice.value}><a href={choice.value} className="justify-center hover:text-white">{choice.description}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
