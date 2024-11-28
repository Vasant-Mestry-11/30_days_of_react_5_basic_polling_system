import { useState } from "react";

const PollComponent = ({ questions }) => {
  const [questionair, setQuestionair] = useState(questions);

  const changeCount = (questionIndex, optionIndex) => {
    const updatedVotes = { ...questionair };
    updatedVotes[questionIndex].options[optionIndex].count += 1;
    setQuestionair({ ...updatedVotes });
  };

  return (
    <div className="p-20">
      {questions.map(({ question, options }, questionIndex) => (
        <div
          key={`question-${questionIndex}`}
          className="question-container mb-6"
        >
          <h4
            className="question-title text-secondary text-4xl mb-10"
            id={`question-${questionIndex}`}
          >
            {question}
          </h4>
          <div className="options-container flex gap-8">
            {options.map(({ option, count }, optionIndex) => (
              <button
                key={`option-${questionIndex}-${optionIndex}`}
                className="option-button px-6 py-3 bg-dark text-secondary rounded-xl"
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
