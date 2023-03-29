import './App.css';
import Quiz from './components/Quiz';
import React from 'react';
import data from './data';
import Home from './components/Home';
import { nanoid } from 'nanoid';

function App() {

  const [showComponent, setShowComponent] = React.useState(true);
  const [answers, setAnswers] = React.useState([]);

  function handleButtonClick() {
    setShowComponent(!showComponent);
  };

  function handleOptionsButton(id, answer, buttonId){

    const index = answers.findIndex((elem) => elem.id === id)

    const myAnswer = {
      button: buttonId,
      id: id,
      myAnswer: answer,
      isSelected: true
    }

    if(index === -1){
      setAnswers((prevAnswers) => [myAnswer, ...prevAnswers]);
    }else{
      const newAnswers = [...answers];
      newAnswers[index] = myAnswer;
      setAnswers(newAnswers);
    }

  }

  console.log(answers)

  function checkAnswers(){
    
  }


  return (
    <>
      <div className='App'>
        {showComponent && <Home handleButtonClick={handleButtonClick}/>}
        {!showComponent && <Quiz
          questionData={data}
          answersData={answers}
          setId={nanoid}
          handleOptionsButton={handleOptionsButton}
          checkAnswers={checkAnswers}
          />}
      </div>
    </>
  );
}

export default App;
