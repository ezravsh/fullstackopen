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
  <StatisticLine text="good" value={good}/>
  <StatisticLine text="neutral" value={neutral}/>
  <StatisticLine text="bad" value={bad}/>
  <StatisticLine text="Average" value={(good-bad)/(good+neutral+bad)}/>
  <StatisticLine text="Positive" value={good/(good+neutral+bad)}/>
    </div>
  )}
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}

const Button = ({action, text}) => {
  return <button onClick={action}> {text} </button>
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
      <Button action={goodPlus} text="good"/>
      <Button action={neutralPlus} text="neutral"/>
      <Button action={badPlus} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App