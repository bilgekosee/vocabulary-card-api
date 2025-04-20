import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import VocabularyCardOne from "./cards/VocabularyType1/VocabularyType1";
import VocabularyCardSecond from "./cards/VocabularyType2/VocabularyType2";
import VocabularyCardThird from "./cards/VocabularyType3/VocabularyType3";
import VocabularyCardFourth from "./cards/VocabularyType4/VocabularyType4";
import Header from "./header/header";
import LoginRegister from "./login-register/loginRegister";
function App({ darkModeOpen }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Header />
      <div className="app-container">
        <div className={`sidebar-main ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar
            isOpen={isSidebarOpen}
            toggleOpen={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        <div className={`content ${darkModeOpen ? "dark" : "light"}`}>
          <Routes>
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/card-type-1" element={<VocabularyCardOne />} />
            <Route path="/card-type-2" element={<VocabularyCardSecond />} />
            <Route path="/card-type-3" element={<VocabularyCardThird />} />
            <Route path="/card-type-4" element={<VocabularyCardFourth />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
