const express = require('express');
const axios = require('axios');
const credentials = require('../credentials.js');
const app = express();
const port = 3000;
const helpers = require('./helpers.js');

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

app.get('/', (req, res) => {
  // res.send('Connected to server; ');
  res.sendFile('index.html', {root: './Public'});
});

app.get(/^\/\b\d{5}$/, (req, res) => {
  // res.send('Connected to server; ');
  res.sendFile('index.html', {root: './Public'});
});

app.get('/reviews/', (req, res)=>{
  // eslint-disable-next-line quotes
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=` + req.query.product_id;
  // console.log(req.query, 'req query');
  console.log('___________________________');

  axios({
    method: 'get',
    url: url,
    headers: {
      Authorization: credentials.authorization,
    },
  })
    .then((reviews) => {
      // console.log('Successful response from gitHub API call', reviews.data);
      let averageRating = helpers.starRating(reviews.data.results);
      let pctRecommend = helpers.pctRecommend(reviews.data.results);
      reviews.data.averageRating = averageRating;
      reviews.data.pctRecommend = pctRecommend;
      return res.status(201).json(reviews.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });
});

app.get('/get-average-rating', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?sort=newest&product_id=${req.query.productId}`,
    headers: {
      Authorization: credentials.authorization,
    }
  })
  .then((summary) => {
    var counter = 0;
    var totalStars = 0;
    for (var x in summary.data.ratings) {
      counter += parseInt(summary.data.ratings[x]);
      totalStars += (parseInt(x) * parseInt(summary.data.ratings[x]))
    }
    var averageStars = totalStars / counter;
    console.log(averageStars);
    return res.status(200).json(averageStars)
  })
  .catch((err) => {
    return res.status(500);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/47421`);
});