import { Appbar } from "../components/Appbar";
import BlogDetails from "../components/BlogDetails";
import { BlogSkeleton } from "../components/BlogsSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  return (
    <>
      <Appbar />
      {loading ? (
        <div>
          <BlogSkeleton />
        </div>
      ) : (
        <div>
          <BlogDetails blog={blog} />;
        </div>
      )}
    </>
  );
};

export default Blog;
