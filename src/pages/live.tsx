import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <div className="py-10 space-y-4 divide-y-2">
      {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div className="px-4 pt-4" key={i}>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className="mt-2 text-lg text-gray-700">Let's try potatos</h3>
        </div>
      ))}
      <button className="fixed p-4 text-white transition-colors bg-orange-400 rounded-full shadow-xl cursor-pointer hover:bg-orange-500 bottom-24 right-5">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Live;
