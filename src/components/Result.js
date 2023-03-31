import React from 'react'

export default function Result(props) {

  function countCorrectAnswers(){
    const corrects = [];
    props.results.forEach((item) => {
      if(item.status === "correct"){
        corrects.push(item);
      }
    })
    return corrects.length;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='quiz--section result'>
      <h2 className='quiz--question'>The quiz is finished <span>&#128522;</span></h2>
      <div className='result--section'>
      <p>Correct Answers: <span className='counter'>{countCorrectAnswers()} / {props.results.length}</span></p>
      <button className='home--button result--button' onClick={refreshPage}>Try Again</button>
      </div>
    </div>
  )
}
