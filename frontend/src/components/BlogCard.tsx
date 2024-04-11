import { Link } from "react-router-dom";

interface BlogCardParams {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  id,
  title,
  content,
  publishedDate,
}: BlogCardParams) => {
  return (
    <Link to={`/blog/${id}`} className="border-b p-4 border-slate-200 pb-4">
      <div className="flex">
        <Avatar name={authorName || "Anonymous"} />

        <div className="flex justify-center flex-col text-sm font-light px-2">
          {authorName || "Anonymous"}
        </div>
        <div className="flex justify-center flex-col p-1">
          <Circle />
        </div>
        <div className="flex justify-center flex-col text-sm text-slate-500 px-2">
          {publishedDate}
        </div>
      </div>
      <div className="font-semibold text-xl pt-2">{title}</div>
      <div className="text-slate-500 pt-1 ">
        {content.slice(0, 150) + "..."}
      </div>
      <div className="text-slate-500 text-sm font-thin pt-2">{`${Math.ceil(
        content.length / 100
      )} minutes read`}</div>
    </Link>
  );
};

export const Avatar = ({
  name,
  size = "small",
}: {
  name: string;
  size?: "big" | "small";
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${
        size === "small" ? 6 : 10
      } h-${
        size === "small" ? 6 : 10
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`font-${
          size === "small" ? "xs" : "base"
        }  text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
};
const Circle = () => {
  return <div className="h-1 w-1 bg-slate-500 rounded-full"></div>;
};

export default BlogCard;
