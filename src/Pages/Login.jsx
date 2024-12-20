import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

const Login = ({ setAuthenticated }) => {
  // State for email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const context = useContext(MyContext);
  const navigate = useNavigate();

  // Handle Login Form Submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
  
    const apiURL = import.meta.env.VITE_PRODUCTS_API;  
  
    try {
      const res = await fetch(`${apiURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
      console.log("Login response:", data); // Check the response structure
  
      if (res.ok) {
        if (data.success) {
          setAuthenticated(true); // Update authentication state
          console.log("Login successful, navigating to /home...");
          navigate("/home"); // Redirect to home page
        } else {
          setError(data.message || "Invalid email or password.");
        }
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Failed to log in. Please check your connection and try again.");
    }
  };
  
  return (
    <div className="container">
      <div className="form-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input Field */}
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Password Input Field */}
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Login Button */}
          <button className="button" type="submit">
            Login
          </button>
        </form>
        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}
        {/* Signup Link */}
        <a href="/signup" className="link">
          Don’t have an account? Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;