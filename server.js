const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Example data
const people = [
  { id: 1, name: 'Alice', photo: 'https://media.licdn.com/dms/image/C5603AQGeNI7S6432vw/profile-displayphoto-shrink_200_200/0/1643630320667?e=2147483647&v=beta&t=VgfVHogaU705MZGK9M_MdRMYnBfHM9dDkTar-ylo304', job: 'CEO' },
  { id: 2, name: 'Bob', photo: 'https://media.licdn.com/dms/image/C5603AQGeNI7S6432vw/profile-displayphoto-shrink_200_200/0/1643630320667?e=2147483647&v=beta&t=VgfVHogaU705MZGK9M_MdRMYnBfHM9dDkTar-ylo304', job: 'CTO' },
  { id: 3, name: 'Carol', photo: 'https://media.licdn.com/dms/image/C5603AQGeNI7S6432vw/profile-displayphoto-shrink_200_200/0/1643630320667?e=2147483647&v=beta&t=VgfVHogaU705MZGK9M_MdRMYnBfHM9dDkTar-ylo304', job: 'Engineer' },
  { id: 4, name: 'Dave', photo: 'https://media.licdn.com/dms/image/C5603AQGeNI7S6432vw/profile-displayphoto-shrink_200_200/0/1643630320667?e=2147483647&v=beta&t=VgfVHogaU705MZGK9M_MdRMYnBfHM9dDkTar-ylo304', job: 'Programmer' },
  { id: 5, name: 'Eve', photo: 'https://media.licdn.com/dms/image/C5603AQGeNI7S6432vw/profile-displayphoto-shrink_200_200/0/1643630320667?e=2147483647&v=beta&t=VgfVHogaU705MZGK9M_MdRMYnBfHM9dDkTar-ylo304', job: 'PM' },
  { id: 6, name: 'Frank', photo: 'https://example.com/frank.jpg', job: 'CFO' }
];

// Fetch a random person
app.get('/api/person', (req, res) => {
  const person = people[Math.floor(Math.random() * people.length)];
  res.json(person);
});

// Check if the guess is correct
app.post('/api/guess', (req, res) => {
  const { id, job } = req.body;
  const person = people.find(p => p.id === id);
  res.json({ correct: person && person.job === job });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
