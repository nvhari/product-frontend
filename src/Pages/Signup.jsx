import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const apiURL = import.meta.env.VITE_PRODUCTS_API
    try {
      const res = await fetch(`${apiURL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Failed to create account. Try again.");
      }
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    }
  };
  return (
    <div className="container">
      <div className="form-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button" type="submit">
            Sign Up
          </button>
        </form>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        <a href="/login" className="link">
          Already have an account? Log in
        </a>
      </div>
    </div>
  );
};
export default Signup;