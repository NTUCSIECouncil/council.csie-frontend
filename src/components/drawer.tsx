import { FaBars } from 'react-icons/fa6';
const Drawer = ({
  choices,
  selected,
}: {
  choices: {
    value: string;
    description: string;
  }[];
  selected: string;
}): React.JSX.Element => {
  return (
    <div className="fixed top-20 left-0 md:relative md:top-0">
      <div className="drawer md:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex md:hidden">
          <label htmlFor="my-drawer" className="btn gray-900 border-gray-500 border-2 hover:bg-slate-600">
            <FaBars></FaBars>
            {/* <div className="font-bold text-lg ml-2">{selected}</div> */}
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content p-4 font-bold text-xl border-2 rounded-2xl w-64 h-[70%]">
            {choices.map(choice => (
              selected == choice.description ? <li key={choice.value}><a href={choice.value} className="justify-center bg-gray-700 text-white border-b-2">{choice.description}</a></li> : <li key={choice.value}><a href={choice.value} className="justify-center hover:text-white">{choice.description}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
