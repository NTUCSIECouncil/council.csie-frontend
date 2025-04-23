const LifeLink = ({
  content,
  href,
}: {
  content: string;
  href: string;
}): React.JSX.Element => {
  return (
    <a href={href} className="py-1 px-2 rounded bg-[#a167a5] bg-opacity-70 text-white hover:bg-gray-400">{content}</a>
  );
};

export default LifeLink;
