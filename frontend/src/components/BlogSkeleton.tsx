import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse max-w-screen-md w-full mx-auto p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-md border border-gray-200 cursor-pointer select-none">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full w-48"></div>
        <div className="flex space-x-2 items-center pl-2">
          <Circle />
          <div className="h-5 w-24 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-8 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full w-full"></div>
        <div className="h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full w-5/6"></div>
        <div className="h-6 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full w-3/4"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-150 to-gray-200 rounded-full w-2/5 mt-6"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
