const List = ({
  list,
}: {
  list: string[];
}): React.JSX.Element => {
  return (
    <div>
      <ul className="list-disc list-outside translate-x-4">
        {list.map((it, index) => <li key={index} className="font-bold text-xl">{it}</li>)}
      </ul>
    </div>
  );
};

export default List;
