import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import About from "./About";
function Blog() {
  return (
    <div className="container2">
      <div className="row">
        <div className="col">
          <Link to="/blog"></Link>
          <Routes>
            <Route path="/blog" exact element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Blog;
