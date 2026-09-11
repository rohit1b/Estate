import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const API_URL = "http://localhost:5000/api/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("aurarise_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("aurarise_token"));

  const login = async (email, password, role) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Login failed");

    setUser(data.user);
    setToken(data.token);
    localStorage.setItem("aurarise_user", JSON.stringify(data.user));
    localStorage.setItem("aurarise_token", data.token);
    return data.user;
  };

  const register = async (name, email, password, role) => {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Registration failed");
    return data;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("aurarise_user");
    localStorage.removeItem("aurarise_token");
  };

  const canEdit = user && (user.role === "admin" || user.role === "client");

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, canEdit }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}