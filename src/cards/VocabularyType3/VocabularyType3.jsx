import "./VocabularyType3.css";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";
import Vocabulary from "../../data/vocabulary_complete.json";

const VocabularyCardThird = () => {
  const [isApproved, setIsApproved] = useState(null);
  const [index, setIndex] = useState(0);
  const [flippedCard, setFlippedCard] = useState(false);
  const currentWord = Vocabulary[index];

  const nextCard = () => {
    setIndex((prevIndex) =>
      prevIndex < Vocabulary.length - 1 ? prevIndex + 1 : 0
    );
    setFlippedCard(false);
    setIsApproved(null);
  };
  const prevCard = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Vocabulary.length - 1
    );
    setFlippedCard(false);
    setIsApproved(null);
  };

  return (
    <div className="third-card-container">
      <div className="third-card-wrapper">
        <div className="third-card-title-wrapper">
          <span className="third-card-title">{currentWord.english}</span>
        </div>

        <div className="control-icons">
          <FaTimesCircle
            className="reject-button"
            onClick={() => setIsApproved(false)}
          />
          <FaCheckCircle
            className="ok-button"
            onClick={() => setIsApproved(true)}
          />
        </div>

        {isApproved !== null && (
          <div className="translate-content-wrapper">
            {isApproved ? (
              <div className="false-section">
                <span className="translate-content">Tebrikler!!!</span>
                <span className="answer">{currentWord.turkish}</span>
              </div>
            ) : (
              <div className="false-section">
                <span className="translate-content">
                  Üzülme bir dahaki sefere yapabilirsin!!!
                </span>
                <span className="answer">{currentWord.turkish}</span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="card-third-icons-wrapper">
        <BiSolidLeftArrowCircle
          className="card-third-icons left"
          onClick={prevCard}
        />
        <BiSolidRightArrowCircle
          className="card-third-icons right"
          onClick={nextCard}
        />
      </div>
    </div>
  );
};

export default VocabularyCardThird;
