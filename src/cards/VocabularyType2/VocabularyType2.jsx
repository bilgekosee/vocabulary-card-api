import { useState } from "react";
import "./VocabularyType2.css";
import Vocabulary from "../../data/vocabulary_complete.json";

const VocabularyCardSecond = () => {
  const [activeIndex, setActiveIndex] = useState(Vocabulary.length - 1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [transform, setTransform] = useState("none");
  const [opacity, setOpacity] = useState(1);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;

    setTransform(`translate(${dx}px, ${dy}px)`);

    const el = document.querySelector(".flash-card-status");
    if (el) {
      el.textContent = dx > 0 ? "Got it" : "Study again";
      el.style.background = dx > 0 ? "green" : "orange";
      el.style.opacity = Math.min(Math.abs(dx / 150), 1);
    }
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    if (Math.abs(dx) > 150) {
      setTransform(`translateX(${dx > 0 ? "150%" : "-150%"})`);
      setOpacity(0);

      setTimeout(() => {
        const flippedEl = document.querySelector(".flash-card--inner");
        if (flippedEl?.classList.contains("flip")) {
          flippedEl.classList.remove("flip");
        }

        const statusEl = document.querySelector(".flash-card-status");
        if (statusEl) {
          statusEl.textContent = "Study again";
          statusEl.style.opacity = "0";
        }

        setIsFlipped(false);
        setActiveIndex((prev) => prev - 1);
        setTransform("none");
        setOpacity(1);
      }, 400);
    }

    setIsDragging(false);
  };

  const handleUndo = () => {
    if (activeIndex < Vocabulary.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="typetwo-card-container">
      <div className="flash-cards">
        <div className="flash-done">
          <h1>You are doing well!!!</h1>
        </div>

        {activeIndex >= 0 && (
          <div
            className="flash-card active"
            style={{ transform, opacity }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={() => setIsFlipped((prev) => !prev)}
          >
            <div className="flash-card-status">Study again</div>
            <div className={`flash-card--inner ${isFlipped ? "flip" : ""}`}>
              <div className="flash-card--front">
                <h1>{Vocabulary[activeIndex].english}</h1>
              </div>
              <div className="flash-card--back">
                <h1>{Vocabulary[activeIndex].turkish}</h1>
              </div>
            </div>
          </div>
        )}
      </div>

      <button className="undo-swipe" onClick={handleUndo}>
        Undo
      </button>
    </div>
  );
};

export default VocabularyCardSecond;
