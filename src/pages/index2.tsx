import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-5 space-y-2">
      <details>
        <summary>What is my fav. food.</summary>
        <span>김치</span>
      </details>
    </div>
  );
};

export default Home;
