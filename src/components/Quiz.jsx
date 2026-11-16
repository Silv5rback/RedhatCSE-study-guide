/**
 * Quiz.jsx — Interactive scored quiz component for RedhatCSE guide
 * 
 * Usage in MDX:
 * import Quiz from '@site/src/components/Quiz';
 * 
 * <Quiz
 *   id="module01-essentials-quiz-1"
 *   question="Which command displays the current runlevel/target in systemd?"
 *   options={[
 *     'systemctl get-default',
 *     'systemctl set-default',
 *     'systemctl isolate',
 *     'systemctl list-units',
 *   ]}
 *   correctAnswer={0}
 *   explanation="systemctl get-default shows the default target (graphical.target, multi-user.target, etc.)"
 * />
 */

import React, { useState } from 'react';

export default function Quiz({ id, question, options, correctAnswer, explanation }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = selected === correctAnswer;
  const isSelected = (i) => selected === i;

  const handleSelect = (index) => {
    setSelected(index);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const optionClass = (index) => {
    if (!submitted) return 'quiz-option';
    if (index === correctAnswer) return 'quiz-option correct';
    if (index === selected) return 'quiz-option incorrect';
    return 'quiz-option';
  };

  return (
    <div className="quiz-container" id={`quiz-${id}`}>
      <div className="quiz-question">{question}</div>
      <ul className="quiz-options">
        {options.map((option, index) => (
          <li
            key={index}
            className={optionClass(index)}
            onClick={() => handleSelect(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSelect(index)}
          >
            {option}
          </li>
        ))}
      </ul>
      {!submitted && selected !== null && (
        <button
          className="quiz-submit-button"
          onClick={handleSubmit}
          disabled={selected === null}
        >
          Submit Answer
        </button>
      )}
      {submitted && (
        <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? '✓ Correct!' : `✗ Incorrect. The correct answer is: ${options[correctAnswer]}`}
          <br />
          <em>{explanation}</em>
        </div>
      )}
      {submitted && (
        <button className="quiz-reset-button" onClick={handleReset}>
          Try Again
        </button>
      )}
      {submitted && isCorrect && (
        <div className="quiz-score">Score: 1/1</div>
      )}
    </div>
  );
}
