import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, Box, Typography } from '@mui/material';

function App() {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [owingStatus, setOwingStatus] = useState('I owe');

  const addPerson = () => {
    const newPerson = {
      name: name,
      username: username,
      expense: expense,
      amount: amount,
      status: owingStatus,
    };
    setPersons([...persons, newPerson]);
    setName('');
    setUsername('');
    setExpense('');
    setAmount('');
    setOwingStatus('I owe'); // Reset owing status after adding
  };

  const deletePerson = (index) => {
    const updatedPersons = [...persons];
    updatedPersons.splice(index, 1);
    setPersons(updatedPersons);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'rgb(204 255 255)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add Person
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        variant="outlined"
        margin="normal"
        type="number"
      />
      <Select
        value={owingStatus}
        onChange={(e) => setOwingStatus(e.target.value)}
        variant="outlined"
        margin="normal"
      >
        <MenuItem value="I owe">I owe</MenuItem>
        <MenuItem value="They owe me">They owe me</MenuItem>
        <MenuItem value="Split equally">Split equally</MenuItem>
      </Select>
      <Button variant="contained" onClick={addPerson}>
        Add Person
      </Button>

      <Typography variant="h4" gutterBottom>
        Added Persons
      </Typography>
      <Box>
        {persons.map((person, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1">
              {person.username} {person.expense} {person.status} ${person.amount}
            </Typography>
            <Button variant="contained" onClick={() => deletePerson(index)}>
              Delete
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;