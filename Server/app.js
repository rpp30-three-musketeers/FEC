const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('Public'));


app.get('/', (req, res) => {
  res.send('Connected to server; ');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});