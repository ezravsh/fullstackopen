import React from 'react';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

{/*const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[2].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[3].exercises}/>
    </div>
  )
}*/}

const Total = (props) => {

  return (
    <p>Number of exercises {props.total}</p>
  )

}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total total ={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  );
}

export default App;
