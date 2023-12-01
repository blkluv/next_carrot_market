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
    </div>
  );
};

export default Live;
