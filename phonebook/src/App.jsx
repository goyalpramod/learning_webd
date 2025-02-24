import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('a new name....')
  const [newNumber, setNewNumber] = useState('a new number....')
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    let names = persons.map(person=> person.name)
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number : newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const [searchName, setSearchName] = useState('')
  const personsToShow = searchName === ''
  ? []
  : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input
        value={searchName}
        onChange={handleSearchName}
        />
        {personsToShow.map(person =>
          <div key={person.name}>{person.name}</div>
        )}
      </div>

      <form>
        <h3>Add a new person</h3>
        <div>
          name: <input 
          value={newName}
          onChange={handleNewName}
          />
          number: <input 
          value={newNumber}
          onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => 
          <div key={person.name}>{person.name} {person.number !== undefined ? person.number : 'No number'}</div>
        )}
    </div>
  )
}

export default App