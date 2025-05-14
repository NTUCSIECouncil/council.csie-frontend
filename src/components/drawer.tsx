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
    <div className="fixed top-20 left-0 lg:relative lg:top-0">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex lg:hidden">
          <label htmlFor="my-drawer" className="btn gray-900 border-gray-500 border-2 hover:bg-slate-600">
            <FaBars></FaBars>
            {/* <div className="font-bold text-lg ml-2">{selected}</div> */}
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu flex-nowrap overflow-y-scroll backdrop-blur-lg bg-opacity-30 lg:bg-base-200 text-base-content p-4 font-bold text-xl lg:border-2 lg:rounded-2xl w-64 h-[100%] lg:h-[70%]">
            <li className="mt-20 lg:mt-0 invisible"></li>
            {choices.map(choice => (
              selected == choice.description ? <li key={choice.value}><a href={choice.value} className="justify-center bg-gray-700 text-white text-center border-b-2">{choice.description}</a></li> : <li key={choice.value}><a href={choice.value} className="justify-center text-center hover:text-white">{choice.description}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
