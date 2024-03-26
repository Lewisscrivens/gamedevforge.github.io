import React, { useState } from 'react';

const Question = ({ title, answers, correctAnswer, onAnswered }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);
      if (answer === correctAnswer) {
        onAnswered(true);
      } else {
        onAnswered(false);
      }
    }
  };

  const getButtonStyle = (answer) => {
    if (isAnswered) {
      if (answer === correctAnswer) {
        return { outline: '2px solid green' };
      } else if (answer === selectedAnswer) {
        return { outline: '2px solid red' };
      }
    }
    return {};
  };

  return (
    <div>
      <h3>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {answers.map((answer, index) => (
          <div key={index} style={{ marginBottom: '10px', width: '400px' }}>
            <button
              onClick={() => handleAnswerClick(answer)}
              style={{ width: '100%', textAlign: 'left', ...getButtonStyle(answer) }}
              disabled={isAnswered}>
              {answer}
            </button>
          </div>
          ))}
      </div>
    </div>
    );
};

export default Question;

/*

Usage:

In MD files use the following:

import Question from '@site/src/components/quiz/question';

<Question
title="What's 2 + 2?"
answers: ['3', '4', '5', '6'],
correctAnswer: '4',
/>

*/