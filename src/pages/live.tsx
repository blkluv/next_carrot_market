import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div>
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className="mt-2 text-lg font-medium text-gray-700">
          Let's try potatos
        </h3>
      </div>
    </div>
  );
};

export default Live;
