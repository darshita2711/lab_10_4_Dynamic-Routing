
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>My Blog</h2>

      <div>
        <Link to="/blog">Blog</Link><br></br>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
