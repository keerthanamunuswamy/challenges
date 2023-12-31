import starIcon from "./assets/images/icon-star.svg";
import QuestionAnswer from "./components/QuestionAnswer.jsx";
import { FAQs } from "./questions.jsx";
function App() {
  return (
    <div className="App">
      <div className="faq-bg"></div>
      <div className="faq-wrapper">
        <div className="faq-header">
          <img src={starIcon} alt="star-icon" />
          <p>FAQs</p>
        </div>
        <ul>
          {FAQs.map((faq) => {
            return (
              <li key={faq.id}>
                <QuestionAnswer {...faq} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
