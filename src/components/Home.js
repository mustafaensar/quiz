import React from 'react'
import "./Home.css"
import logo from "../logo.svg"

export default function Home(props) {
  return (
    <div className='home'>
      <h1 className='home--header'>Quizzical <img className='home--logo' src={logo} alt={logo}/></h1>
      <button className='home--button' onClick={props.handleButtonClick}>Start Quiz</button>
    </div>
  )
}
