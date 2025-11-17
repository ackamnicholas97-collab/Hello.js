require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT; 

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} '${req.url}' - ${new Date()}`);
  next(); // Pass to next handler (required!)
});

app.post('/user', (req, res) => {
  const { name, email} = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Missing Data' });
  res.status(201).json({ responds: `Hello ${name}!` });

});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.json({ call: req.body });

});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(`User ${id} profile`);

});


app.get('/', (req, res) => {
  res.send('My Week 2 API!')
});


app.get('/search', (req, res) => {
  const id = req.query.id;
  console.log(id);
  res.send(id);
});



app.listen(port, () => {
  console.log(`API live on port ${port}`);
});


