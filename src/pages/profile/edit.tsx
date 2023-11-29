import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div className="space-y-1">
        <label htmlFor="input" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="input"
          type="email"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
    </div>
  );
};

export default EditProfile;
