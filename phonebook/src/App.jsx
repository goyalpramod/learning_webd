import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import axios from 'axios'
import personService from './services/persons'

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
    if (names.includes(newName)){
      const id = persons.find(person => person.name === newName).id
      if (window.confirm(`${newNumber} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.id === id)
        const changedPerson = { ...person, number: newNumber }
        handleUpdateNumber(id, changedPerson)
      }
    }

    const personObject = {
      name: newName,
      number : newNumber,
    }
    setPersons(persons.concat(personObject))
    setNewName('')

    personService.create(personObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('') 
        console.log(response);
  })
}

  const [searchName, setSearchName] = useState('')
  
  const personsToShow = searchName === ''
  ? []
  : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
  
  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  useEffect(() => {
    personService.getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const handleUpdateNumber = (id, newObject) => {
    personService.updateNumber(id, newObject)
      .then(response => {
        setPersons(persons.map(person => person.id !== id ? person : response))
      })
  }

  const handleDelete = (id) => {
    console.log("this is the id being passed " + id);
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      < Filter filter={searchName} handleFilterChange={handleSearchName} personsToShow={personsToShow} />

      <form>
        <h3>Add a new person</h3>
        < PersonForm newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} addPerson={addPerson} />
      </form>
      <h2>Numbers</h2>
        < Persons personsToShow={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App