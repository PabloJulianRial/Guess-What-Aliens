"use client"
import { useEffect, useState } from 'react';
import generateQuestions from '../app/utils/GenerateQuestions';


export default function QuestionCard({alienObjects, setAlienObjects}) {
  const [validQuestions, setValidQuestions] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [indexer, setIndexer] = useState(0)
  const [answer, setAnswer] = useState(null);
  const [guess, setGuess] = useState()


  useEffect(()=>{
    generateQuestions(alienObjects).then((questions)=> {
      setValidQuestions(questions)
      setIsLoading(false)
    })
  }, [alienObjects])

  const chosenAlien = alienObjects[0]
  if (isLoading) {
    return <h1>loading</h1>
  }

  const indexIncrementer = (dir) => {
    if (dir === +1 && indexer === (validQuestions.length-1)) {
      setIndexer(indexer - (validQuestions.length -1))
    } else if (dir === -1 && indexer === 0){
      setIndexer(validQuestions.length - 1)
    } else {
      setIndexer(indexer + dir)
    }
    
  }

  function questionChecker(alienProp, checkFor) {
    if (chosenAlien[alienProp].toString() === checkFor) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  }

  function handleSubmit() {
    questionChecker(validQuestions[indexer].alienProp, validQuestions[indexer].checkFor);
  }

  function submitGuess(e){
    e.preventDefault()
    if (guess) {
      guessChecker(guess, chosenAlien)
    }
  }

  function guessChecker(guess, chosenAlien) {
    if (guess === chosenAlien._id) {
      console.log("Winner winner chicken dinner")
    } else {
      console.log("Nah,.")
    }
  }

  if (validQuestions.length) {
    return (
        <div className="questioncard">
          {/* {validQuestions.map((question) => {
            return <h3>Does you alien have {question.question}?</h3>
          })} */}
          <button onClick={()=>{indexIncrementer(-1)}}>back</button>
          <h3>{validQuestions[indexer].question}</h3>
          <button onClick={()=>{indexIncrementer(+1)}}>Forward</button>
          <button onClick={()=>{handleSubmit()}}>Submit</button>
          <div>{answer ? "Yes" : "No"}</div>

          <form onSubmit={(e)=>{submitGuess(e)}}>
            <select onChange={(e)=>{setGuess(e.target.value)}}>
              <option key="blank_space"></option>
            {alienObjects.map((alien) => {
              if (alien.isActive) {
                return <option value={alien._id} key={alien.name}>{alien.name}</option>
              }
            })}
            </select>
            <button>Submit My Guess!</button>
          </form>
        </div>
      );
  }

}


