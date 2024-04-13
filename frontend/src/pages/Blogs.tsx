import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { Blog, useBlogs } from "../hooks";
import { BlogsSkeleton } from "../components/BlogsSkeleton";

const Blogs = () => {
  const { loading, blogs }: { loading: boolean; blogs: Blog[] } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center ">
          <div className="max-w-lg w-full">
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd Feb 2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
