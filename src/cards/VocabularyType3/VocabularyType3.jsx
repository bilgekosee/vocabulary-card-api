import "./VocabularyType3.css";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from "react-icons/bi";

const VocabularyCardThird = ({ userId }) => {
  const [vocabulary, setVocabulary] = useState([]);
  const [isApproved, setIsApproved] = useState(null);
  const [index, setIndex] = useState(0);
  const [flippedCard, setFlippedCard] = useState(false);
  const currentWord = vocabulary[index];

  useEffect(() => {
    if (!userId) return;
    const fetchWords = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/words/3/${userId}`);
        const data = await res.json();
        setVocabulary(data);
      } catch (err) {
        console.error("Veri çekme hatası:", err);
      }
    };

    fetchWords();
  }, [userId]);

  const nextCard = () => {
    setIndex((prevIndex) =>
      prevIndex < vocabulary.length - 1 ? prevIndex + 1 : 0
    );
    setFlippedCard(false);
    setIsApproved(null);
  };
  const prevCard = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : vocabulary.length - 1
    );
    setFlippedCard(false);
    setIsApproved(null);
  };

  if (!currentWord) return <div>Yükleniyor...</div>;

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
