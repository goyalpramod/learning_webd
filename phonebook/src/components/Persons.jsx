const Persons = ({ personsToShow, handleDelete }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <div key={person.id}>
          {person.name}{" "}
          {person.number !== undefined ? person.number : "No number"}{" "}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export { Persons };
