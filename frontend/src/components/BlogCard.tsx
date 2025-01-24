import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const Blogcard = ({ authorName, id, title, content, publishedDate }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex mt-1 flex-col">
          {/* Author and Published Date */}
          <div className="flex flex-row items-center">
            <div>
              <Avatar name={authorName} size="small" />
            </div>
            <div className="pl-2 mt-1 text-sm font-medium text-gray-700">
              {authorName} {/* Slightly bolder font for author */}
            </div>
            <div className="font-light mt-1 pl-2 text-sm text-slate-500">
              {publishedDate}
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-xl font-bold text-gray-900 mt-2">
          {title} {/* Bolder font for title */}
        </div>

        {/* Content Preview */}
        <div className="text-md font-light text-gray-700 mt-1">
          {content.slice(0, 100) + "..."}
        </div>

        {/* Reading Time */}
        <div className="text-slate-500 text-sm font-light mt-1">
          {(Math.ceil(content.length / 100)<=1) ? "1 min read" : `${Math.ceil(content.length / 100)} mins read`}
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ name, size }: { name: string; size: "small" | "big" }) {
  return (
    <div>
      <div
        className={`relative inline-flex items-center justify-center overflow-hidden bg-slate-400 rounded-full dark:bg-gray-600 ${
          size === "small" ? "w-6 h-6" : "w-10 h-10"
        }`}
      >
        <span
          className={`text-xs font-medium opacity-100 text-gray-600 dark:text-gray-300 ${
            size === "small" ? "text-xs" : "text-md"
          }`}
        >
          {name[0]}
        </span>
      </div>
    </div>
  );
}

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}
