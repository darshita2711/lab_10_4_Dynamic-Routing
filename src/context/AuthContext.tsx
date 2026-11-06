
import { createContext, useState } from "react";
import type { ReactNode } from "react";

// 1. Define the context structure
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// 2. Create the context
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// 3. Define Provider props
interface AuthProviderProps {
  children: ReactNode;
}

// 4. Create the Provider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login function
  const login = () => {
    setIsAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
