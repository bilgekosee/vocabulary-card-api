import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import VocabularyCardOne from "./cards/VocabularyType1/VocabularyType1";
import VocabularyCardSecond from "./cards/VocabularyType2/VocabularyType2";
import VocabularyCardThird from "./cards/VocabularyType3/VocabularyType3";
import VocabularyCardFourth from "./cards/VocabularyType4/VocabularyType4";
import Header from "./header/header";
import LoginRegister from "./login-register/loginRegister";
import AddWords from "./addWords/addWords";

function App({ darkModeOpen }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedIsLOggedIn = localStorage.getItem("isLoggedIn");

    if (storedUserId && storedIsLOggedIn === "true") {
      setUserId(storedUserId);
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Header
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
        setUserId={setUserId}
      />
      <div className="app-container">
        <div className={`sidebar-main ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar
            isOpen={isSidebarOpen}
            toggleOpen={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        <div className={`content ${darkModeOpen ? "dark" : "light"}`}>
          <Routes>
            <Route
              path="/login"
              element={
                <LoginRegister
                  setLoggedIn={setLoggedIn}
                  setUserId={setUserId}
                />
              }
            />
            <Route
              path="/addWord"
              element={
                userId ? (
                  <AddWords userId={userId} />
                ) : (
                  <div>Lütfen giriş yapınız.</div>
                )
              }
            />

            <Route
              path="/card-type-1"
              element={
                userId ? (
                  <VocabularyCardOne userId={userId} />
                ) : (
                  <div>Lütfen giriş yapınız.</div>
                )
              }
            />
            <Route
              path="/card-type-2"
              element={
                userId ? (
                  <VocabularyCardSecond userId={userId} />
                ) : (
                  <div>Lütfen giriş yapınız.</div>
                )
              }
            />
            <Route
              path="/card-type-3"
              element={
                userId ? (
                  <VocabularyCardThird userId={userId} />
                ) : (
                  <div>Lütfen giriş yapınız.</div>
                )
              }
            />
            <Route
              path="/card-type-4"
              element={
                userId ? (
                  <VocabularyCardFourth userId={userId} />
                ) : (
                  <div>Lütfen giriş yapınız.</div>
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
