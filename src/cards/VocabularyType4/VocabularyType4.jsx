import "./VocabularyType4.css";
import { MdTranslate } from "react-icons/md";
import {
  PiArrowCircleRightDuotone,
  PiArrowCircleLeftDuotone,
} from "react-icons/pi";

const VocabularyCardFourth = () => {
  return (
    <div className="container-card-fourth">
      <div className="card-fourth">
        <h1>Solace</h1>
        <span className="card-fourth-info">
          <MdTranslate />
        </span>
        <div className="card-fourth-answer">
          <p>
            Üzüntü veya sıkıntı anında içini biraz olsun rahatlatan şey, huzur,
            teselli
          </p>
        </div>
      </div>
      <div className="card-fourth-arrowsicon-wrapper">
        <PiArrowCircleLeftDuotone className="card-fourth-arrowsicon left" />
        <PiArrowCircleRightDuotone className="card-fourth-arrowsicon right" />
      </div>
    </div>
  );
};

export default VocabularyCardFourth;
