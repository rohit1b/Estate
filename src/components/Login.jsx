import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login({ onSuccess }) {
  const { login, register } = useAuth();
  const [mode, setMode] = useState("login"); // "login" or "register"
  const [role, setRole] = useState("user"); // admin, client, user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (mode === "login") {
        await login(email, password, role);
        onSuccess();
      } else {
        await register(name, email, password, role);
        setSuccess("Registration successful! now you can login.");
        setMode("login");
        setName("");
        setPassword("");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="font-display text-3xl text-navy-900 mb-2 text-center">
          {mode === "login" ? "Login" : "Register"}
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Rohitrise Realty
        </p>

        {/* Role selector */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {["admin", "client", "user"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`py-2 rounded-lg text-sm font-semibold capitalize border transition-colors ${
                role === r
                  ? "bg-navy-900 text-white border-navy-900"
                  : "bg-white text-navy-900 border-gray-300"
              }`}
            >
              {r} Login
            </button>
          ))}
        </div>

        {error && (
          <p className="bg-red-50 text-red-600 text-sm rounded-lg p-3 mb-4">{error}</p>
        )}
        {success && (
          <p className="bg-green-50 text-green-600 text-sm rounded-lg p-3 mb-4">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-sm font-semibold text-navy-900 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-navy-900 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-full bg-gold text-navy-900 font-semibold disabled:opacity-60"
          >
            {loading ? "Please wait..." : mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError("");
              setSuccess("");
            }}
            className="text-gold-dark font-semibold"
          >
            {mode === "login" ? "Register " : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}