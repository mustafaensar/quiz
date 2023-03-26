import React from 'react';
import "./Quiz.css"

export default function Quiz(props) {

  return (
    <div className='quiz'>
      <ol className='quiz--list'>
        {props.questionData.map((quiz) => {
          return (
            <div className='quiz--section'>
              <li key={quiz.id}>
                <h2 className='quiz--question'>{quiz.question}</h2>
                <ol className='quiz--options'>
                  {quiz.options.map((elem) => {
                    return (
                      <li>
                        <input
                          className='quiz--button'
                          type="button"
                          value={elem}
                          status=""
                          onClick={(event) => {
                            props.handleOptionsButton(quiz.id, event.target.value, event.target.status)
                          }}
                        />
                      </li>
                    )
                  })}
                </ol>
                <div className='category'>
                  <p className='category--text'>{quiz.category}</p>
                  <p className='category--text'>{quiz.difficulty} difficulty</p>
                </div>
              </li>
            </div>
          )
        })}
      </ol>
    </div>
  )
}
