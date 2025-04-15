import { useState, useEffect } from "react";
import "./sidebar.css";
import { TbCardsFilled } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbWritingSign } from "react-icons/tb";
import { GiRead } from "react-icons/gi";
import { RiSpeakAiFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setİsOpen] = useState(true);
  const [open, setOpen] = useState(true);
  const [readinOpen, setReadingOpen] = useState(false);
  const [writingOpen, setWritingOpen] = useState(false);
  const [speakingOpen, setSpeakingOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 610) {
        setİsOpen(false);
      } else {
        setİsOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const toggleOpenRead = () => {
    setReadingOpen((prevOpen) => !prevOpen);
  };
  const toggleOpenWrite = () => {
    setWritingOpen((prevOpen) => !prevOpen);
  };
  const toggleOpenSpeak = () => {
    setSpeakingOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className={`sidebar-card ${isOpen ? "open" : "close"}`}>
      <div className="responsie-design">
        <div
          className="name-site"
          onClick={() => {
            setİsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <span className="site-name-title">WISE VOCABULARY</span>
          ) : (
            <span className="site-name-short">WV</span>
          )}
        </div>

        <div className="tab">
          <div className="type-cards-wrapper" onClick={toggleOpen}>
            <div className="cardsand-icon">
              <TbCardsFilled className="cards-icon" />
              <span className="card-title">CARDS</span>
            </div>
            {open ? (
              <IoIosArrowDown className="cards-icon-arrow" />
            ) : (
              <IoIosArrowUp className="cards-icon-arrow" />
            )}
          </div>

          {open && (
            <ul className="submenu">
              <li onClick={() => navigate("/card-type-1")}>Card Type 1</li>
              <li onClick={() => navigate("/card-type-2")}>Card Type 2</li>
              <li onClick={() => navigate("/card-type-3")}>Card Type 3</li>
              <li onClick={() => navigate("/card-type-4")}>Card Type 4</li>
            </ul>
          )}
        </div>
        <div className="tab">
          <div className="type-cards-wrapper" onClick={toggleOpenRead}>
            <div className="cardsand-icon">
              <GiRead className="cards-icon" />
              <span className="card-title">READING</span>
            </div>
            {readinOpen ? (
              <IoIosArrowDown className="cards-icon-arrow" />
            ) : (
              <IoIosArrowUp className="cards-icon-arrow" />
            )}
          </div>

          {readinOpen && (
            <ul className="submenu">
              <li>Read Type 1</li>
              <li>Read Type 2</li>
              <li>Read Type 3</li>
              <li>Read Type 4</li>
            </ul>
          )}
        </div>
        <div className="tab">
          <div className="type-cards-wrapper" onClick={toggleOpenWrite}>
            <div className="cardsand-icon">
              <TbWritingSign className="cards-icon" />
              <span className="card-title">WRITING</span>
            </div>
            {writingOpen ? (
              <IoIosArrowDown className="cards-icon-arrow" />
            ) : (
              <IoIosArrowUp className="cards-icon-arrow" />
            )}
          </div>

          {writingOpen && (
            <ul className="submenu">
              <li onClick={() => navigate("/card-type-1")}>Write Type 1</li>
              <li onClick={() => navigate("/card-type-2")}>Write Type 2</li>
              <li onClick={() => navigate("/card-type-3")}>Write Type 3</li>
              <li onClick={() => navigate("/card-type-4")}>Write Type 4</li>
            </ul>
          )}
        </div>

        <div className="tab">
          <div className="type-cards-wrapper" onClick={toggleOpenSpeak}>
            <div className="cardsand-icon">
              <RiSpeakAiFill className="cards-icon" />
              <span className="card-title">SPEAKING</span>
            </div>
            {speakingOpen ? (
              <IoIosArrowDown className="cards-icon-arrow" />
            ) : (
              <IoIosArrowUp className="cards-icon-arrow" />
            )}
          </div>

          {speakingOpen && (
            <ul className="submenu">
              <li onClick={() => navigate("/card-type-1")}>Speak Type 1</li>
              <li onClick={() => navigate("/card-type-2")}>Speak Type 2</li>
              <li onClick={() => navigate("/card-type-3")}>Speak Type 3</li>
              <li onClick={() => navigate("/card-type-4")}>Speak Type 4</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
