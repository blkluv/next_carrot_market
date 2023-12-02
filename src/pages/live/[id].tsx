import type { NextPage } from "next";

const LiveDetail: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-4">
      <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
      <h3 className="mt-2 text-2xl font-semibold text-gray-800">
        Let&apos;s try potatos
      </h3>
    </div>
  );
};

export default LiveDetail;
