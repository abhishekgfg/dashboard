import React, { useState } from "react";
import "../styles/AuthPage.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">
          {isLogin ? "Welcome Back 👋" : "Join Us 🚀"}
        </h1>
        <p className="auth-subtitle">
          {isLogin
            ? "Login to continue your journey."
            : "Create an account and get started!"}
        </p>

        <form className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="auth-input" />
          )}
          <input type="email" placeholder="Email" className="auth-input" />

          {/* Password input with Eye icon */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="auth-input"
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? " Signup" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
