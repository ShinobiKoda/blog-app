import useFetch from "./use_fetch";
import { useParams, useNavigate } from "react-router-dom"; // import useNavigate for navigation

const BlogDetails = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Find the blog that matches the ID from the URL
  const blog = blogs?.find(blog => blog.id.toString() === id);

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
    if (confirmed) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE',
      }).then(() => {
        // Navigate to the home page after deletion
        navigate('/');
      }).catch(err => {
        console.error('Error deleting the blog:', err);
      });
    }
  };

  // Handling loading and error states
  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog_details">
      {blog ? (
        <article className="blog_content">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <button onClick={handleDelete} className="delete-btn">Delete Blog</button>
        </article>
      ) : (
        <p>Blog not found.</p>
      )}
    </div>
  );
};

export default BlogDetails;
