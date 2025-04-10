import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import VocabularyCardOne from "./cards/VocabularyType1/VocabularyType1";
import VocabularyCardSecond from "./cards/VocabularyType2/VocabularyType2";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/card-type-1" element={<VocabularyCardOne />} />
            <Route path="/card-type-2" element={<VocabularyCardSecond />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
