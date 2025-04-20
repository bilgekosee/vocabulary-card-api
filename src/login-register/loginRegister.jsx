import "./loginRegister.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const LoginRegister = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const [isLogin, setIsLogin] = useState(type === "login");

  useEffect(() => {
    setIsLogin(type === "login");
  }, [type]);
  return (
    <div className="login-register-container">
      {isLogin ? (
        <div className="login-register">
          <div className="login-regiter-title">Login</div>
          <form className="login-register-form">
            <input type="email" placeholder="Email *" required />
            <input type="password" placeholder="Password *" required />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="login-register">
          <div className="login-regiter-title">Register</div>
          <form className="login-register-form">
            <input type="text" placeholder="Username *" required />
            <input type="email" placeholder="Email *" required />
            <input type="password" placeholder="Password *" required />
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default LoginRegister;
