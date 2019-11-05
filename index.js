const express = require('express');

const app = express();
app.use(express.json());

const db = require('./data/db-config.js');

app.get('/api/cars', (req, res) => {
  db('car-dealer') 
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error retrieving records: ' + error.message });
    });
});


app.post('/api/cars', (req, res) => {

  db('car-dealer') 
    .insert(req.body)
    .then((result) => {
      res.status(201).json({message: 'success', id: result});
    })
    .catch(error => {
      res.status(500).json({ message: 'Error creating records: ' + error.message });
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
