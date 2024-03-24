import React, { useState } from 'react';
import Question from '@site/src/components/mpx/question';

const QuizSection = ({ questions }) => {
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showPercentage, setShowPercentage] = useState(false);

    const handleQuestionAnswered = (isCorrect) => {
        setAnsweredQuestions(answeredQuestions + 1);
        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        }
        // Check if all questions have been answered
        if (answeredQuestions + 1 === questions.length) {
            setShowPercentage(true);
            
        }
    };

    const calculatePercentage = () => {
        if (answeredQuestions === 0) return 0;
        return Math.round((correctAnswers / answeredQuestions) * 100);
    };

    return (
        <div>
            { questions.map((question, index) => (
                <Question
                    key={index}
                    title={question.title}
                    answers={question.answers}
                    correctAnswer={question.correctAnswer}
                    onAnswered={handleQuestionAnswered}
                />
                ))}
            { showPercentage && (
                <div>
                    <h3>Results</h3>
                    <p>Correct Answers: {calculatePercentage()}%</p>
                </div>
                )}
        </div>
        );
};

export default QuizSection;

/*

Usage:

In MD files use the following:

import QuizSection from '@site/src/components/mpx/quizSection';

<QuizSection questions={[
  {
    title: "What's 2 + 2?",
    answers: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
  {
    title: "What's 2 + 3?",
    answers: ['3', '4', '5', '6'],
    correctAnswer: '5',
  },
  // Add more questions here
]} />

*/