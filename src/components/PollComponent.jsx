import { useState } from "react";

const PollComponent = ({ questions }) => {
  const [questionair, setQuestionair] = useState(questions);

  const changeCount = (questionIndex, optionIndex) => {
    const updatedVotes = { ...questionair };
    updatedVotes[questionIndex].options[optionIndex].count += 1;
    setQuestionair({ ...updatedVotes });
  };

  return (
    <div>
      {questions.map(({ question, options }, questionIndex) => (
        <div key={`question-${questionIndex}`} className="question-container">
          <h4 className="question-title" id={`question-${questionIndex}`}>
            {question}
          </h4>
          <div className="options-container">
            {options.map(({ option, count }, optionIndex) => (
              <button
                key={`option-${questionIndex}-${optionIndex}`}
                className="option-button"
                onClick={() => changeCount(questionIndex, optionIndex)}
              >
                <span className="option-text">{option}</span>
                <br />
                <span className="vote-count">Vote {count}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PollComponent;
