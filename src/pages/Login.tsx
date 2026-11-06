import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Login() {
    const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Login must be inside AuthProvider");
  }

  const { login, isAuthenticated } = context;

  return (
    <div>
      <h1>Login Page</h1>

      {isAuthenticated ? (
        <p>You are already logged in!</p>
      ) : (
        <button onClick={login}>
          Log In
        </button>
      )}
    </div>
  );
}

export default Login;