
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function Navbar() {
    const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Navbar must be inside AuthProvider");
  }

  const { isAuthenticated, logout } = context;
  return (
    <nav>
      <h2>My Blog</h2>

      <div>
        <Link to="/blog">Blog</Link>

        {isAuthenticated ? (
          <>
            <Link to="/admin">Admin</Link>
            <button onClick={logout}>Log Out</button>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
