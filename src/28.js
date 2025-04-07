let express = require('express');
let app = express();
app.use(express.static('public'));

app.get('/fetch', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
