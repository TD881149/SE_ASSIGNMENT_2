const express = require('express')
const app = express()
const port = 5000

app.listen(port, () => console.log(`Listening on port ${port}`)); 

//routes setup for backend server


app.get('/', (req, res) => { 
  res.send(`server is running on ${port}`)
});

app.get('/getnews', (req, res) => { 
    res.send(`server is running on ${port}`)
  });