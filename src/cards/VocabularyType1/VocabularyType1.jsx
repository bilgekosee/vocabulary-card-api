import "./VocabularyType1.css";
import Vocabulary from "../../data/vocabulary_complete.json";
import { useState } from "react";
import {
  PiArrowFatLineLeftDuotone,
  PiArrowFatLineRightDuotone,
} from "react-icons/pi";

const VocabularyCardOne = () => {
  const [word, setWord] = useState([]);
  return (
    <div class="container" ontouchstart="this.classList.toggle('hover');">
      <div class="card">
        <div class="card_front">
          <h1 class="card-symbol">&#128628;</h1>
        </div>

        <div class="card_back">
          <h1 class="card-symbol">&#128628;</h1>
          <div class="card-text">
            <p>
              The word <strong>ampersand</strong> is a corruption of the phrase
              "and per se & (and)", meaning "and intrinsically the word and
              (represented by the symbol &)".
            </p>
            <p>
              The ampersand can be traced back to the 1st century A.D. and the
              Old Roman cursive, in which the letters E and T occasionally were
              written together to form a ligature.
            </p>
          </div>
        </div>
      </div>
      <div className="arrows-icon-wrapper">
        <PiArrowFatLineLeftDuotone className="arrows-icon left" />
        <PiArrowFatLineRightDuotone className="arrows-icon right" />
      </div>
    </div>
  );
};

export default VocabularyCardOne;
