const Background = (): React.JSX.Element => {
  return (
    <div
      className="h-full w-full fixed
                    before:absolute before:rounded-full before:-translate-x-[20%] before:-translate-y-[30%] before:bg-purple-600/5 before:content-[''] before:h-[calc(25vw+10rem)] before:w-[calc(25vw+10rem)]
                    after:absolute after:rounded-full after:translate-x-[20%] after:translate-y-[calc(25%-3rem)] after:origin-bottom-right after:right-0 after:bottom-0 after:bg-lime-300/5 after:content-[''] after:h-[calc(35vw+10rem)] after:w-[calc(35vw+10rem)]"
    ></div>
  );
};

export default Background;
