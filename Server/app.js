const express = require('express');
const axios = require('axios');
const credentials = require('../credentials.js');
const app = express();
const port = 3000;

app.use(express.static('Public'));

app.get('/products', (req, res) => {
  // eslint-disable-next-line quotes
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products`;

  if (req.query.product_id) {
    let extension = `/${req.query.product_id}`;
    url += extension;
  }

  if (req.query.endpoint) {
    let extension = `/${req.query.endpoint}`;
    url += extension;
  }


  if (req.query.parameters) {
    url += '?';
    if (req.query.parameters.page) {
      let extension = `page=${req.query.parameters.page}`;
      url += extension;
    }
    if (req.query.parameters.count) {
      let extension = `&count=${req.query.parameters.count}`;
      url += extension;
    }
  }

  axios({
    method: 'get',
    url: url,
    data: null,
    headers: {
      Authorization: credentials.authorization
    }
  })
    .then((products) => {
      return res.status(201).json(products.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });

});

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/reviews/', (req, res)=>{
  // eslint-disable-next-line quotes
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=47421`;
  console.log(req.query, 'req query');
  console.log('___________________________');

  axios({ // you would normaly get params from req
    method: 'get',
    url: url,
    // data: {
    //   product_id: 47421,
    //   sort: 'relevant',
    // },
    headers: {
      Authorization: credentials.authorization,

    },

  })
    .then((reviews) => {
      console.log('Successful response from gitHub API call', reviews.data);
      return res.status(201).json(reviews.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });
});