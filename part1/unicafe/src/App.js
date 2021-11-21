import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  if (good===0 & neutral===0 & bad===0) {
    return (
      <div>
      <h2> Statistics: </h2>
      <p>No feedback given</p>
        </div>
    )
  } else {

  return (
    <div>
  <h2> Statistics: </h2>
  <p>good: {good}</p>
  <p>neutral: {neutral}</p>
  <p>bad: {bad}</p>
  <p>Average: {(good-bad)/(good+neutral+bad)}</p>
  <p>Positive: {good/(good+neutral+bad)}</p>
    </div>
  )}
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const goodPlus = () => {
  setGood(good+1);
  console.log(good);
}
const neutralPlus = () => {
  setNeutral(neutral+1);
  console.log(neutral);
}
const badPlus = () => {
  setBad(bad+1);
  console.log(bad);
}

  return (
    <div>
      <h2> Give Feedback! </h2>
      <button onClick={goodPlus}> good </button>
      <button onClick={neutralPlus}> neutral</button>
      <button onClick={badPlus}> bad </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App