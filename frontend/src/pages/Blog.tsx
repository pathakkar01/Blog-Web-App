import { Appbar } from "../components/Appbar";
import BlogDetails from "../components/BlogDetails";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading) {
    <div>loading</div>;
  }
  return <BlogDetails blog={blog} />;
};

export default Blog;
