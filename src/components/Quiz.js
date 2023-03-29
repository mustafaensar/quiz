import React from 'react';
import Question from './Question';
import "./Quiz.css"

export default function Quiz(props) {

  return (
    <div className='quiz'>
      <ol className='quiz--list'>
        <Question 
        disabled={props.disabled}
        questions={props.questionData} 
        answers={props.answersData}
        setId={props.setId}
        handleOptionsButton={props.handleOptionsButton} 
        />
      </ol>
      <button className='check' onClick={() => props.checkAnswers()}>Check Answers</button>
    </div>
  )
}
