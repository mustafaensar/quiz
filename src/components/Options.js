import React from 'react'

export default function Options(props) {
  
  return (
    <>
      {props.options.map((elem) => {
        return (
          <li>
            <input
              disabled={props.disabled}
              id={props.setId()}
              className='quiz--button'
              type="button"
              value={elem}
              style={{backgroundColor: 
                props.answers?.some(item => (item.myAnswer === elem && item.status === "selected")) ? 
                "#4D5B9E" 
                :
                props.answers?.some(item => (item.myAnswer === elem && item.status === "wrong")) ?
                "red"
                :
                props.answers?.some(item => ((props.correctAnswer === elem || item.myAnswer === elem) && item.status === "correct")) ?
                "green"
                :
                ""
              }}
              onClick={(event) => {
                props.handleOptionsButton(props.quizId, event.target.value, event.target.id, event)
              }}
            />
          </li>
        )
      })}
    </>
  )
}
