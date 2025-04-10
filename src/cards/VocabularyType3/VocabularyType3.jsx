import "./VocabularyType3.css";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const VocabularyCardThird = () => {
  const [isApproved, setIsApproved] = useState(null);

  return (
    <div className="third-card-container">
      <div className="third-card-wrapper">
        <div className="third-card-title-wrapper">
          <span className="third-card-title">Hello</span>
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
                <span className="answer">Merhaba</span>
              </div>
            ) : (
              <div className="false-section">
                <span className="translate-content">
                  Üzülme bir dahaki sefere yapabilirsin!!!
                </span>
                <span className="answer">Merhaba</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VocabularyCardThird;
