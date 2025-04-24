import "./VocabularyType4.css";
import { useState, useEffect } from "react";
import { MdTranslate } from "react-icons/md";
import {
  PiArrowCircleRightDuotone,
  PiArrowCircleLeftDuotone,
} from "react-icons/pi";

const VocabularyCardFourth = ({ userId }) => {
  const [vocabulary, setVocabulary] = useState([]);
  const [indexCardFour, setIndexCardFour] = useState(0);
  const [flipCard, setFlipCard] = useState(false);
  const currentWord = vocabulary[indexCardFour];

  useEffect(() => {
    if (!userId) return;
    const fetchWords = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/words/4/${userId}`);
        const data = await res.json();
        setVocabulary(data);
      } catch (err) {
        console.error("Veri çekme hatası:", err);
      }
    };

    fetchWords();
  }, [userId]);

  const nextCardFour = () => {
    setIndexCardFour((prevIndex) =>
      prevIndex < vocabulary.length - 1 ? prevIndex + 1 : 0
    );
    setFlipCard(false);
  };
  const prevCardFour = () => {
    setIndexCardFour((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : vocabulary.length - 1
    );
    setFlipCard(false);
  };

  if (!currentWord) return <div>Yükleniyor...</div>;
  return (
    <div className="container-card-fourth">
      <div className="card-fourth">
        <h1>{currentWord.english}</h1>
        <span className="card-fourth-info">
          <MdTranslate />
        </span>
        <div className="card-fourth-answer">
          <p>{currentWord.turkish}</p>
        </div>
      </div>
      <div className="card-fourth-arrowsicon-wrapper">
        <PiArrowCircleLeftDuotone
          className="card-fourth-arrowsicon left"
          onClick={prevCardFour}
        />
        <PiArrowCircleRightDuotone
          className="card-fourth-arrowsicon right"
          onClick={nextCardFour}
        />
      </div>
    </div>
  );
};

export default VocabularyCardFourth;
