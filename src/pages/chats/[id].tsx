import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 p-2 text-sm text-gray-700 border border-gray-300 rounded-md">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 w-full max-w-md mx-auto">
        <div className="flex items-center">
          <input
            type="text"
            className="w-full border-gray-300 rounded-full shadow-sm focus:ring-orange-500 focus:outline-none focus:border-orange-500"
          />
          <div>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
