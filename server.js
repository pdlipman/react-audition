const express = require('express');
const studentList = require('./students');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({message: "Hello from the server side"});
});

app.get('/api/students', (req, res) => {
    res.send(studentList);
});

app.listen(port, () => console.log(`Server listening on port ${port}, proxied by the client code server`));