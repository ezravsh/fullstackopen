import React, { useState } from 'react'

//const points = Array(7).fill(0)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  const random = () => {
    const i = Math.floor(Math.random()*7)
    setSelected(i)
    console.log(`i: ${i}`)
  }

  const [points, setPoint] = useState([...Array(7).fill(0)])
  //console.log(`points:${points}`)
  
  const updatePoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoint(copy)
    console.log(copy)
  }

  const Anecdote = () => {
    const n = Math.max(...points)
    console.log('largest', n)
    const index = points.indexOf(n)
    console.log("index", index)
    return (
      <div>
      <h2>Anecdote with most votes:</h2>
      <p>{anecdotes[index]}</p>
      <p>has {points[index]} votes</p>
      </div>
    )
  }


  return (
    <div>
      <h2>Anecdote of the Day:</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points.</p>
      <button onClick={updatePoints}>vote </button>
      <button onClick={random}>next anecdote</button>
      <Anecdote/>
    </div>
  )
}

export default App
