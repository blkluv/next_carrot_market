import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-5 space-y-2">
      <input
        type="file"
        className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file: file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
      />
    </div>
  );
};

export default Home;
