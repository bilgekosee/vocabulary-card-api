import { useEffect } from "react";
import "./VocabularyType2.css";

const VocabularyCardSecond = () => {
  let activeCard = null;
  let activeCardStatus = null;
  let isAnimating = false;
  let cardToAnimate = null;
  let activeCardRect = null;
  let touchStartRect = {};

  const readCards = [];
  const remainingCards = [];

  useEffect(() => {
    const flashCards = [...document.querySelectorAll(".flash-card")];
    const flashOutroCard = document.querySelector(".flash-done");

    remainingCards.push(...flashCards);

    flashCards.forEach((card) => {
      card.addEventListener(
        "mousedown",
        (e) => {
          cardToAnimate = e.target.closest(".flash-card");

          if (cardToAnimate.classList.contains("active")) {
            activeCard = cardToAnimate;
            activeCardStatus = activeCard.querySelector(".flash-card-status");
            cardToAnimate.style.transition = "none";
            activeCardRect = activeCard.getBoundingClientRect();
            touchStartRect = { x: e.clientX, y: e.clientY };
          }
        },
        true
      );

      card.addEventListener("mousemove", (e) => {
        if (cardToAnimate) {
          isAnimating = true;
          requestAnimationFrame(() => {
            AnimateActiveCard(e);
          });
        }
      });

      card.addEventListener("mouseup", (event) => {
        const cardToFlip = event.target.closest(".flash-card");
        if (isAnimating) {
          stopAnimation(event);
        } else {
          isAnimating = false;
          cardToAnimate = null;
          flipCard(cardToFlip);
        }
      });
    });

    function AnimateActiveCard(e) {
      const x = e.clientX - touchStartRect.x;
      const y = e.clientY - touchStartRect.y;

      activeCard.style.transform = `translate3d(${x}px, ${y}px, 0px)`;

      const right = x > 1;
      const cardOpacity = Math.min(
        Math.abs(x / (activeCardRect.width / 2)) * 1,
        1
      );

      if (right) {
        activeCardStatus.style.background = "green";
        activeCardStatus.style.opacity = `${cardOpacity}`;
        activeCardStatus.textContent = "Got it";
      } else {
        activeCardStatus.style.background = "orange";
        activeCardStatus.style.opacity = `${cardOpacity}`;
        activeCardStatus.textContent = "Study again";
      }
    }

    function stopAnimation(e) {
      const lastX = e.clientX - touchStartRect.x;
      const endY = e.clientY - touchStartRect.y;
      activeCard.style.transition = "transform .8s ease-in";
      activeCardStatus.style.opacity = "0";

      if (Math.abs(lastX) > activeCardRect.width / 2) {
        const right = lastX > 0;

        if (right) {
          activeCard.style.transform = `translate3d(100vw, ${endY}px, 0px)`;
        } else {
          activeCard.style.transform = `translate3d(-100vw, ${endY}px, 0px)`;
        }

        readCards.push(activeCard);
        remainingCards.pop();
        setNextActiveCard();
      } else {
        activeCard.style.transform = "none";
      }

      cardToAnimate = null;
      activeCardStatus = null;
      isAnimating = false;
      touchStartRect = null;
    }

    function setNextActiveCard() {
      if (remainingCards.length > 0) {
        activeCard = remainingCards[remainingCards.length - 1];
        activeCard.classList.add("active");
        activeCard.style.transform = "none";
      } else {
        flashOutroCard.classList.add("show");
      }
    }

    function flipCard(card) {
      if (!card.classList.contains("active")) return;
      const innerCard = card.querySelector(".flash-card--inner");
      innerCard.classList.toggle("flip");
    }
  }, []);

  const handleUndo = () => {
    if (readCards.length > 0 && remainingCards.length > 0) {
      const nextCard = readCards.pop();
      const lastActive = activeCard;

      remainingCards.push(nextCard);

      activeCard.classList.remove("active");
      activeCard = nextCard;

      activeCard.style.transition = "transform .3s ease-in";
      activeCard.style.transform = "none";
      lastActive.style.transform = "rotate(5deg)";

      nextCard.classList.add("active");
    }
  };

  return (
    <div className="typetwo-card-container">
      <div className="flash-cards">
        <div className="flash-done">
          <h1>You are doing well!!!</h1>
        </div>
        {[1, 2, 3, 4].map((_, i) => (
          <div className={`flash-card ${i === 3 ? "active" : ""}`} key={i}>
            <div className="flash-card-status">Study again</div>
            <div className="flash-card--inner">
              <div className="flash-card--front">
                <h1>Front</h1>
              </div>
              <div className="flash-card--back">
                <h1>Back</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="undo-swipe" onClick={handleUndo}>
        undo
      </button>
    </div>
  );
};

export default VocabularyCardSecond;
