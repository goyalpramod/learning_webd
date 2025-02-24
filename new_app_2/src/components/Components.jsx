const Header = (props) => {
    return(
        <h1>{props.course.name}</h1>
    )
}

const Content = (props) => {
    return (
        <>
            {props.course.parts.map(part => (
                <Part 
                    key={part.id} 
                    name={part.name} 
                    exercises={part.exercises} 
                />
            ))}
            {
                props.course.parts.reduce((sum, part) => sum + part.exercises, 0) > 0 &&
                <p><strong>total of {props.course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>
            }
        </>
    )
}

const Part = (props) => {
    return(
        <p>{props.name} {props.exercises}</p>
    )
}

const Course = (props) => {
    return(
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
        </div>
    )
}

export { Course }