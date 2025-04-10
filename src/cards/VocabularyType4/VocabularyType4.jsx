import "./VocabularyType4.css";
import { MdTranslate } from "react-icons/md";

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
    </div>
  );
};

export default VocabularyCardFourth;
