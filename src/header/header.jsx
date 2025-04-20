import { useState, useEffect } from "react";
import "./header.css";
import { MdDarkMode, MdSunny } from "react-icons/md";

const Header = () => {
  const [darkModeOpen, setDarkModeOpen] = useState(false);

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
