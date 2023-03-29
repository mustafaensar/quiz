import React from 'react'

export default function Options(props) {
  
  return (
    <>
      {props.options.map((elem) => {
        return (
          <li>
            <input
              id={props.setId()}
              className='quiz--button'
              type="button"
              value={elem}
              style={{backgroundColor: 
                props.answers?.some(item => (item.myAnswer === elem && item.isSelected === true)) ? "#4D5B9E" : ""
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
