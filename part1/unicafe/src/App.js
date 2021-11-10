import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const Button = () => {
  return (
  <button>good</button>
  )
}

  return (
    <div>
      <h2> Give Feedback! </h2>
      <Button />
      <h2> Statistics: </h2>
    </div>
  )
}

export default App