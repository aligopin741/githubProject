const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.json({
    message: 'Hello from Node.js!'
  });
});

app.listen(3000, () => {
  console.log('Node.js Server is running on http://localhost:3000');
});
