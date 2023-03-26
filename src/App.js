import './App.css';
import Quiz from './components/Quiz';
import React from 'react';
import data from './data';
import Home from './components/Home';

function App() {

  const [showComponent, setShowComponent] = React.useState(true);
  const [answers, setAnswers] = React.useState([]);

 
  function handleButtonClick() {
    setShowComponent(!showComponent);
  };

  {/*function newData(){
    const newData = data;
    const shuffledOptions = newData.map((elem) => elem.options.sort((a, b) => 0.5 - Math.random()));
    for(let i=0; i<newData.length; i++){
      newData[i].options = shuffledOptions[i];
    };
    return newData;
  }*/}

  function handleOptionsButton(id, answer, status){
    
    if(status !== "selected"){
      status = "selected"
    }

    const index = answers.findIndex((elem) => elem.id === id)

    const myAnswer = {
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

    console.log(answer)
  }

  console.log(answers)

  return (
    <>
      <div className='App'>
        {showComponent && <Home handleButtonClick={handleButtonClick}/>}
        {!showComponent && <Quiz questionData={data} options={answers} handleOptionsButton = {handleOptionsButton}/>}
      </div>
    </>
  );
}

export default App;
