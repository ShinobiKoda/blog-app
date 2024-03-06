import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Sir P');

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="create_container">
        <h3>Add Blog</h3>
        <div className="create_blog">
          <div className="input title">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              placeholder="Blog Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input body">
            <label htmlFor="body">Body</label>
            <textarea
              required
              placeholder="Body...."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="author">
            <label htmlFor="author">Author</label>
            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="Sir P">Sir P</option>
              <option value="Gojo">Gojo</option>
              <option value="Sukuna">Sukuna</option>
              <option value="Cid">Cid</option>
            </select>
          </div>
          <div className="submit">
           <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateBlog;
