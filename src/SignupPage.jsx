import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./LoginPage.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert("Account created successfully! Please log in.");
      navigate("/login"); // Redirect to login page after signup
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="animated-bg"></div>
      <div className="login-box">
        <h1>Create an Account</h1>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
