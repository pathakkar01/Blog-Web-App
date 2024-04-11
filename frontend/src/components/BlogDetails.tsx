import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

const BlogDetails = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-content">
        <div className="grid grid-cols-12 w-full mt-5 px-20 max-w-screen-2xl gap-6">
          <div className="col-span-8">
            <div className="text-4xl font-extrabold">{blog.title}</div>
            <div className="pt-4 text-lg  text-slate-500">
              Posted on 2nd Dec 2023
            </div>
            <div className="text-xl mt-5 text-slate-600">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-500 font-semibold">Author</div>
            <div className="flex gap-4 pt-2">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold ">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className=" text-slate-500">
                  Random catch pharse the author's ability to grab the user's
                  attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
