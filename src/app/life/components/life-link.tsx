import { IoMdLink } from 'react-icons/io';

const LifeLink = ({
  content,
  href,
}: {
  content: string;
  href: string;
}): React.JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-nowrap py-1 px-4 rounded-xl bg-[#a167a5]/70 text-white hover:bg-[#a689b1] text-sm md:text-lg"
    >
      <IoMdLink className="-rotate-45" />
      {content}
    </a>
  );
};

export default LifeLink;
