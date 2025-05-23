const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/home', (req, res) => {
  res.send('Welcome to your personal space!');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
