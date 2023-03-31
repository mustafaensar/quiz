import './App.css';
import Quiz from './components/Quiz';
import React from 'react';
import data from './data';
import Home from './components/Home';
import { nanoid } from 'nanoid';
import Result from './components/Result';

function App() {

  const [showComponent, setShowComponent] = React.useState(true);
  const [answers, setAnswers] = React.useState([]);
  const [finished, setFinished] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[finished]);

  function handleButtonClick() {
    setShowComponent(!showComponent);
  };

  function handleOptionsButton(id, answer, buttonId){

    const index = answers.findIndex((elem) => elem.id === id)

    const myAnswer = {
      button: buttonId,
      id: id,
      myAnswer: answer,
      status: "selected"
    }

    if(index === -1){
      setAnswers((prevAnswers) => [myAnswer, ...prevAnswers]);
    }else{
      const newAnswers = [...answers];
      newAnswers[index] = myAnswer;
      setAnswers(newAnswers);
    }

  }

  function checkAnswers(){
    if(data.length === answers.length){
      for(let i=0; i<answers.length; i++) {
        for(let j=0; j<data.length; j++) {
          if(answers[i].id === data[j].id) {
            if(answers[i].myAnswer !== data[j].correctAnswer){
              answers[i].status = "wrong"
            }
            else if(answers[i].myAnswer === data[j].correctAnswer){
              answers[i].status = "correct"
            }
            setFinished(true);
            setDisabled(true);
          }
        }
      }
    }
    else {
      alert("Please finish the quiz")
    }
  }

  return (
    <>
      <div className='App'>
        {showComponent && <Home handleButtonClick={handleButtonClick}/>}
        {!showComponent && (finished === true) ? <Result results={answers}/> : ""}
        {!showComponent && <Quiz
          disabled={disabled}
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
