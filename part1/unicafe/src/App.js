import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const increaseByOne = () => {
  setGood(good+1);
  console.log(good);
}

  return (
    <div>
      <h2> Give Feedback! </h2>
      <button onClick={increaseByOne}> Good </button>
      <h2> Statistics: </h2>
    </div>
  )
}

export default App