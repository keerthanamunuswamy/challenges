import { useState } from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
export default function QuestionAnswer({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  function toggleShow() {
    setShowAnswer((prevState) => !prevState);
  }
  return (
    <>
      <div className="faq-question">
        <p>{question}</p>
        <img
          src={showAnswer ? minusIcon : plusIcon}
          alt="minus-icon"
          onClick={toggleShow}
        />
      </div>
      {showAnswer && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </>
  );
}
