import { useState } from 'react';
import Home from './home';
import NavBar from './navbar';
import BlogDetails from './blog_details';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
