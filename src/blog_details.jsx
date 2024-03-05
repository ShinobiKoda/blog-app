import useFetch from "./use_fetch";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
  const { id } = useParams();

  // Find the blog that matches the ID from the URL
  const blog = blogs?.find(blog => blog.id.toString() === id);

  // Handling loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog_details">
      {blog ? (
        <div className="blog_content">
          <h2>{blog.title}</h2> {/* Assuming your blog objects have a title */}
          <p>{blog.body}</p>
        </div>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
};

export default BlogDetails;
