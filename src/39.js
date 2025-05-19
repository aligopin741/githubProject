const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/image', (req, res) => {
  const imageUrl = 'https://example.com/image.jpg';
  res.send(`${imageUrl}`);
});

app.listen(3000);
