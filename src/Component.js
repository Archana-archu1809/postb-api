import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
function Component() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="about">
            About
          </Link>
          <Link to="/blog" className="about">
            Blog
          </Link>
        </nav>
        <Routes>
          <Route path="/" exact element={<About />} />
        </Routes>
        <Routes>
          <Route path="/blog" exact element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}
export default Component;
