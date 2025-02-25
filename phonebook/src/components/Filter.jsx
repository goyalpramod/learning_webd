const Filter = ({ filter, handleFilterChange, personsToShow }) => {
    return (
        <div>
            filter shown with: <input
            value={filter}
            onChange={handleFilterChange}
            />
            {personsToShow.map(person =>
              <div key={person.name}>{person.name}</div>
            )}
        </div>
        )
    }
    
    export { Filter }