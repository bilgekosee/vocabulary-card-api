import "./loginRegister.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LoginRegister = () => {
  const navigate = useNavigate();

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
          <form
            className="login-register-form"
            action="/login"
            onSubmit={async (e) => {
              e.preventDefault();

              const email = e.target[0].value;
              const password = e.target[1].value;

              try {
                const res = await fetch("http://127.0.0.1:3000/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, password }),
                });
                if (!res.ok) {
                  throw new Error(`Sunucu hatası: ${res.status}`);
                }

                const data = await res.json();
                alert(data.message);
                navigate("/card-type-1");
              } catch (err) {
                console.error("İstek hatası:", err.message);
                alert("İstek başarısız oldu: " + err.message);
              }
            }}
          >
            <input type="email" placeholder="Email *" required />
            <input type="password" placeholder="Password *" required />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div className="login-register">
          <div className="login-regiter-title">Register</div>
          <form
            className="login-register-form"
            action="/register"
            onSubmit={async (e) => {
              e.preventDefault();
              const username = e.target[0].value;
              const email = e.target[1].value;
              const password = e.target[2].value;

              try {
                const res = await fetch("http://127.0.0.1:3000/register", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ username, email, password }),
                });
                if (!res.ok) {
                  throw new Error(`Sunucu hatası: ${res.status}`);
                }

                const data = await res.json();
                alert(data.message);
                navigate("/login?type=login");
              } catch (err) {
                console.error("İstek hatası:", err.message);
                alert("İstek başarısız oldu: " + err.message);
              }
            }}
          >
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
