import "./App.css";
import Sidebar from "./sidebar/sidebar";
import VocabularyCardOne from "./cards/VocabularyType1/VocabularyType1";
import VocabularyCardSecond from "./cards/VocabularyType2/VocabularyType2";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <VocabularyCardOne />
      </div>
    </div>
  );
}

export default App;
