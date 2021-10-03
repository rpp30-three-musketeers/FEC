/* eslint-disable camelcase */
const express = require('express');
const axios = require('axios');
const credentials = require('../credentials.js');
const app = express();
const port = 3000;
const helpers = require('./helpers.js');

app.use(express.static('Public'));
app.use(express.json());
app.use(express.urlencoded());

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
  let pIdForAxios = '';
  let url;
  if (req.query.product_id.length > 5) {
    pIdForAxios = req.query.product_id.slice(0, 5);
  } else {
    pIdForAxios = req.query.product_id;
  }
  if (req.query.sort) {
    let sortBy = '&&sort=' + req.query.sort;
    url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=' + pIdForAxios + '&&count=100' + sortBy;
  } else {
    url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=' + pIdForAxios + '&&count=100';
  }

  axios({
    method: 'get',
    url: url,
    headers: {
      Authorization: credentials.authorization,
    },
  })
    .then((reviews) => {
      // console.log('Successful response from gitHub API call', reviews.data);
      return res.status(201).json(reviews.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });
});

app.get('/reviews/meta', (req, res) =>{
  let urlMeta = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=' + req.query.product_id;
  axios({
    method: 'get',
    url: urlMeta,
    headers: {
      Authorization: credentials.authorization,
    }
  })
    .then((meta) => {
      let averageRating = helpers.starRating(meta.data.ratings);
      let pctRecommend = helpers.pctRecommend(meta.data.recommended);
      let totalReviews = helpers.totalReviews(meta.data.ratings);
      meta.data.averageRating = averageRating;
      meta.data.pctRecommend = pctRecommend;
      meta.data.totalReviews = totalReviews;
      return res.status(200).json(meta.data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500);
    });
});

app.post('/reviews', (req, res)=>{
  // eslint-disable-next-line quotes
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`;
  console.log(req.body.product_id, ' product id');

  axios({
    method: 'post',
    url: url,
    headers: {
      Authorization: credentials.authorization,
    },
    data: {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics,
    }
  })
    .then((status) => {
      //console.log(status);
      console.log('success');
      return res.send('/');
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(500).end();
    });
});

app.post('/reviews/helpful', (req, res)=>{
  axios({
    method: 'put',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/' + req.body.review_id + '/helpful',
    headers: {
      Authorization: credentials.authorization,
    },

  }).then(()=> {
    return res.sendStatus(204);
  }).catch((err)=>{
    console.log(err);
    return res.sendStatus(500);
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
        totalStars += (parseInt(x) * parseInt(summary.data.ratings[x]));
      }
      var averageStars = totalStars / counter;
      //console.log(averageStars);
      return res.status(200).json(averageStars);
    })
    .catch((err) => {
      return res.status(500);
    });
});

app.post('/interactions', (req, res) => {
  // eslint-disable-next-line quotes
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions`;

  let interaction = req.body;

  axios({
    method: 'post',
    url: url,
    data: interaction,
    headers: {
      Authorization: credentials.authorization
    }
  })
    .then(() => {
      return res.status(200).end();
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send('Server Error: Could Not Send Interaction Data');
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/47470`);
});