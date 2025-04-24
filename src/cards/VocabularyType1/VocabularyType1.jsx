import "./VocabularyType1.css";
import { useState, useEffect } from "react";
import {
  PiArrowFatLineLeftDuotone,
  PiArrowFatLineRightDuotone,
} from "react-icons/pi";

const VocabularyCardOne = ({ userId }) => {
  const [vocabulary, setVocabulary] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (!userId) return;
    const fetchWords = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/words/1/${userId}`);
        const data = await res.json();
        setVocabulary(data);
      } catch (err) {
        console.error("Veri çekme hatası:", err);
      }
    };

    fetchWords();
  }, [userId]);
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
      <div className="container" onTouchStart="this.classList.toggle('hover');">
        <div
          className={`card ${flipped ? "hover" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="card_front">
            <h1 className="card-symbol">
              <div className="english-card-wrapper">
                <span>{currentWord.english}</span>
              </div>
            </h1>
          </div>

          <div className="card_back">
            <h1 className="card-symbol">
              <div className="turkish-card-wrapper">
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
