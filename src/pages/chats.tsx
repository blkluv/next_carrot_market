import type { NextPage } from "next";

const Chats: NextPage = () => {
    return <div className="px-4 py-10">
        <div className="flex items-center py-3 space-x-3 border-t border-b cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
    </div>;
};

export default Chats;