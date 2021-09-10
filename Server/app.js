const express = require('express');
const axios = require('axios');
const credentials = require('../credentials.js')
const app = express();
const port = 3000;

app.use(express.static('Public'));

//req.body should contain object with product_id and urlExtension properties. If no extension needed send null
app.get('/products', (req, res) => {

  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`;

  if (req.query.product_id){
    let extension = `/${req.query.product_id}`;
    url += extension;
  }

  console.log(url);

  axios({
    method: 'get',
    url: url,
    data: null,
    headers: {
      Authorization: credentials.authorization
    }
  })
    .then((products) => {
      console.log('Successful response from gitHub API call', products.data);
      return res.status(201).json(products.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    })

});



app.get('/', (req, res) => {
  res.send('Connected to server; ');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

