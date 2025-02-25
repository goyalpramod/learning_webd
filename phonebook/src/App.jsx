import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
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

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        setPersons(response.data)
      })
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      < Filter filter={searchName} handleFilterChange={handleSearchName} personsToShow={personsToShow} />

      <form>
        <h3>Add a new person</h3>
        < PersonForm newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} addPerson={addPerson} />
      </form>
      <h2>Numbers</h2>
        < Persons personsToShow={persons} />
    </div>
  )
}

export default App