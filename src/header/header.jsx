import { useState, useEffect } from "react";
import "./header.css";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = ({ isLoggedIn, setLoggedIn }) => {
  const [darkModeOpen, setDarkModeOpen] = useState(false);
  const handleLogout = () => {
    setLoggedIn(false);
  };

  const toggleDarkMode = () => {
    setDarkModeOpen((prev) => !prev);
  };

  useEffect(() => {
    if (darkModeOpen) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkModeOpen]);

  return (
    <div className="header-container">
      {!isLoggedIn && (
        <>
          <Link to="/login?type=login" className="login-register-header">
            Login
          </Link>
          <Link to="/login?type=register" className="login-register-header">
            Register
          </Link>
        </>
      )}
      {isLoggedIn && (
        <button className="login-register-header" onClick={handleLogout}>
          Logout
        </button>
      )}

      <Link to="/addWord" className="login-register-header">
        <button>Add Word</button>
      </Link>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkModeOpen ? (
          <MdSunny className="light" />
        ) : (
          <MdDarkMode className="dark" />
        )}
      </div>
    </div>
  );
};

export default Header;
