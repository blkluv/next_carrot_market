import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 p-2 text-sm text-gray-700 border rounded-md">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div>
        <div />
        <div>I want ￦20,000</div>
      </div>
      <div>
        <div />
        <div>미쳤어</div>
      </div>
      <div>
        <div>
          <input type="text" />
          <div>
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
