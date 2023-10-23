import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col p-5 space-y-2">
      <details>
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span className="selection:bg-indigo-600 selection:text-white">
          김치
        </span>
      </details>
    </div>
  );
};

export default Home;
