import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [person, setPerson] = useState(null);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetchPerson();
  }, []);

  const fetchPerson = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/person');
      setPerson(response.data);
      setResult(null);
      setGuess('');
    } catch (error) {
      console.error('Error fetching person:', error);
    }
  };

  const handleGuess = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/guess', {
        id: person.id,
        job: guess,
      });
      setResult(response.data.correct ? 'Correct!' : 'Wrong!');
    } catch (error) {
      console.error('Error making guess:', error);
    }
  };

  if (!person) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Guess the Job</h1>
      <div>
        <img src={person.photo} alt={person.name} />
        <h2>{person.name}</h2>
      </div>
      <div>
        <select value={guess} onChange={(e) => setGuess(e.target.value)}>
          <option value="">Select a job</option>
          <option value="CEO">CEO</option>
          <option value="CFO">CFO</option>
          <option value="PM">PM</option>
          <option value="CTO">CTO</option>
          <option value="Engineer">Engineer</option>
          <option value="Programmer">Programmer</option>
        </select>
        <button onClick={handleGuess}>Submit</button>
      </div>
      {result && <div>{result}</div>}
      <button onClick={fetchPerson}>Next</button>
    </div>
  );
};

export default App;