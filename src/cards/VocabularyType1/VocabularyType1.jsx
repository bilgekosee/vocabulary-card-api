import "./VocabularyType1.css";
import Vocabulary from "../../data/vocabulary_complete.json";
import { useState } from "react";
import {
  PiArrowFatLineLeftDuotone,
  PiArrowFatLineRightDuotone,
} from "react-icons/pi";

const VocabularyCardOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentWord = Vocabulary[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Vocabulary.length - 1 ? prevIndex + 1 : 0
    );
    setFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Vocabulary.length - 1
    );
    setFlipped(false);
  };

  return (
    <div className="type-one-wrapper">
      <div class="container" ontouchstart="this.classList.toggle('hover');">
        <div
          className={`card ${flipped ? "hover" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div class="card_front">
            <h1 class="card-symbol">{currentWord.english}</h1>
          </div>

          <div class="card_back">
            <h1 class="card-symbol">&#128628;</h1>
            <div class="card-text">
              <span>{currentWord.turkish}</span>
            </div>
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
