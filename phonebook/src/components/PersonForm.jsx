const PersonForm = ({newName, handleNewName, newNumber, handleNewNumber, addPerson}) => {
    return(
        <div>
            <div>
                name: <input value={newName} onChange={handleNewName} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNewNumber} />
            </div>
            <div>
                <button type="submit" onClick={addPerson}>add</button>
            </div>
        </div>
    )
}

export { PersonForm }