import "./VocabularyType1.css";
import { useState, useEffect } from "react";
import {
  PiArrowFatLineLeftDuotone,
  PiArrowFatLineRightDuotone,
} from "react-icons/pi";

const VocabularyCardOne = () => {
  const [vocabulary, setVocabulary] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const res = await fetch("http://127.0.0.1:3000/words/1");
        const data = await res.json();
        setVocabulary(data);
      } catch (err) {
        console.error("Veri çekme hatası:", err);
      }
    };

    fetchWords();
  }, []);
  const currentWord = vocabulary[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < vocabulary.length - 1 ? prevIndex + 1 : 0
    );
    setFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : vocabulary.length - 1
    );
    setFlipped(false);
  };

  if (!currentWord) return <div>Yükleniyor...</div>;

  return (
    <div className="type-one-wrapper">
      <div class="container" ontouchstart="this.classList.toggle('hover');">
        <div
          className={`card ${flipped ? "hover" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div class="card_front">
            <h1 class="card-symbol">
              <div className="english-card-wrapper">
                <span>{currentWord.english}</span>
              </div>
            </h1>
          </div>

          <div class="card_back">
            <h1 class="card-symbol">
              <div class="turkish-card-wrapper">
                <span>{currentWord.turkish}</span>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="arrows-icon-wrapper">
        <PiArrowFatLineLeftDuotone
          className="arrows-icon left"
          onClick={handlePrev}
        />
        <PiArrowFatLineRightDuotone
          className="arrows-icon right"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default VocabularyCardOne;
