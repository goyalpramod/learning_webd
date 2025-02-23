const Course = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>

    </div>
  )
}

const Content = (props) => {

  return (
    <div>
    <Part part={props.part1} exercises={props.exercises1} />
    <Part part={props.part2} exercises={props.exercises2} />
    <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  let sum = props.exercises1 + props.exercises2 + props.exercises3
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
  const object1 = {
    course: 'Half Stack application development',
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
      <Course course={object1.course} />
      <Content part1={object1.parts[0].name} exercises1={object1.parts[0].exercises} part2={object1.parts[1].name} exercises2={object1.parts[1].exercises} part3={object1.parts[1].name} exercises3={object1.parts[1].exercises} />
      <Total exercises1={object1.parts[0].exercises} exercises2={object1.parts[1].exercises} exercises3={object1.parts[2].exercises} />
    </div>
  )
}

export default App