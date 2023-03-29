import React from 'react'
import Options from './Options'

export default function Question(props) {
  return (
    <>
    {props.questions.map((quiz) => {
          return (
            <div className='quiz--section'>
              <li key={quiz.id}>
                <h2 className='quiz--question'>{quiz.question}</h2>
                <ol className='quiz--options'>
                  <Options
                  answers={props.answers} 
                  options={quiz.options} 
                  quizId={quiz.id} 
                  setId={props.setId}
                  handleOptionsButton={props.handleOptionsButton}
                  />
                </ol>
                <div className='category'>
                  <p className='category--text'>{quiz.category}</p>
                  <p className='category--text'>{quiz.difficulty} difficulty</p>
                </div>
              </li>
            </div>
          )
        })}
    </>
  )
}
