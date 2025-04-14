import "./VocabularyType4.css";
import { useState } from "react";
import { MdTranslate } from "react-icons/md";
import {
  PiArrowCircleRightDuotone,
  PiArrowCircleLeftDuotone,
} from "react-icons/pi";
import Vocabulary from "../../data/vocabulary_complete.json";

const VocabularyCardFourth = () => {
  const [indexCardFour, setIndexCardFour] = useState(0);
  const [flipCard, setFlipCard] = useState(false);
  const currentWord = Vocabulary[indexCardFour];

  const nextCardFour = () => {
    setIndexCardFour((prevIndex) =>
      prevIndex < Vocabulary.length - 1 ? prevIndex + 1 : 0
    );
    setFlipCard(false);
  };
  const prevCardFour = () => {
    setIndexCardFour((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Vocabulary.length - 1
    );
    setFlipCard(false);
  };
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
