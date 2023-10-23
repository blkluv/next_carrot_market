import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-5 space-y-2">
      <input type="file" className="file:border-0 file:rounded-md" />
    </div>
  );
};

export default Home;
