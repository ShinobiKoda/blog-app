import useFetch from "./use_fetch"; 
import { Link } from "react-router-dom";

const Home = () => {
  const { data: blogs, isLoading } = useFetch('http://localhost:8000/blogs');
  

  return (
    <div className="content">
      <h2>All Blogs</h2>
      {isLoading && <p className="loading_index">Loading....</p>}
      <div className="blog_container">
        {blogs && blogs.map((blog) => (
          <Link to = {`/content/${blog.id}`}  key={blog.id}>
            <div className="blogs">
              <h2>{blog.title}</h2>
              <p>Author: {blog.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
