import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Admin() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Admin must be inside AuthProvider");
  }

  const { logout } = context;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="page-container">
    <div className="post-card">
      <h1>Admin Dashboard</h1>
      <p>Welcome! You are successfully logged in.</p>

      <button onClick={handleLogout}>Log Out</button>
    </div>
    </div>
  );
}

export default Admin;