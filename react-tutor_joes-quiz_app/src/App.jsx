import { useState } from "react";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
  }, [timer, showScore]);


  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questionsData
    [currentQuestion].correctOption) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < questionsData.length - 1) {

      setCurrentQuestion((prevQuestion) =>
        prevQuestion + 1);
      setTimer(10);

    }
  };
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
  };

  return (
    <>
      <div className="quiz-app">
        <div className="score-section" style={{
          display: "none"
        }}>
        </div>

        <div className="question-section">
          <h2>Question 1</h2>
          <p>This is sample Question</p>
          <div className="options">
            <button>Option-1</button>
            <button>Option-2</button>
            <button>Option-3</button>
            <button>Option-4</button>
          </div>
          <div className="timer">Time Left: 5s</div>
        </div>
      </div>
    </>
  )
}
export default App;