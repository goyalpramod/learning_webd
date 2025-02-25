const Persons = ({ personsToShow }) => {
    return (
        <div>
            {personsToShow.map(person => 
    <div key={person.name}>{person.name} {person.number !== undefined ? person.number : 'No number'}</div>
  )}
        </div>
    )
}

export { Persons }