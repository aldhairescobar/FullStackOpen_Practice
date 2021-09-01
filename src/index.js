import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      }, 
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content course={course}/>
    </>
  )
}

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  )
}

/* const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  ) 
} */

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}



ReactDOM.render(<App />, document.getElementById('root'))