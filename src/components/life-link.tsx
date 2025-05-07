const LifeLink = ({
  content,
  href,
}: {
  content: string;
  href: string;
}): React.JSX.Element => {
  return (
    <a href={href} className="text-nowrap py-1 px-4 rounded-xl bg-[#a167a5] bg-opacity-70 text-white hover:bg-[#a689b1] text-sm md:text-lg">{content}</a>
  );
};

export default LifeLink;
