import React from 'react';

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <h1>{course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )

}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
    </div>
  )

}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )

}

const App = () => {

  return (
    <div>
      <Header />
      <Content />
      <Total />

    </div>
  );
}

export default App;
