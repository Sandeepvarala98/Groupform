import React from 'react';
import PersonForm from './personform'; // Import the PersonForm component

const App = () => {
  // Define a function to handle adding a new person
  const handleAddPerson = (newPerson) => {
    // Logic to handle adding a new person
    console.log('New person added:', newPerson);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      {/* Render the PersonForm component */}
      <PersonForm onAddPerson={handleAddPerson} />
    </div>
  );
};

export default App;
