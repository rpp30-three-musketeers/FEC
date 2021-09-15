import React from 'react';
import reactDOM from 'react-dom';
import './css/global.css';
import './css/Related.css';
import Header from './Header.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Outfit from './RelatedProducts/Outfit.jsx';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 47421,
      currentProductReviews: []

    };

    this.productIdExtractor = this.productIdExtractor.bind(this);
    this.testCall = this.testCall.bind(this);
    this.updateProductReview = this.updateProductReview.bind(this);
  }

  productIdExtractor(url) {
    var productId = url.split('/')[3];
    this.setState({});
  }

  updateProductReview(data) {
    console.log(data, 'data');
    this.setState({currentProductReviews: data});

  }

  componentDidMount() {
    //this.productIdExtractor(window.location.href);
    console.log('inside componentDidMount');
    console.log(this.currentProductReviews, 'currentproductreviews');

    if (this.currentProductReviews === undefined) {
      let info;
      console.log('inside if statement');
      let options = {
        // eslint-disable-next-line camelcase
        product_id: 47421, //select a specific item by id
        endpoint: 'styles', //null, styles, related
        parameters: { //if retrieving all products controls the amount returned
          page: null, //default is 1
          count: null //default is 5
        }
      // eslint-disable-next-line semi
      }

      $.get('/reviews/', options, (data) => {
        console.log('data from server: ', data);
        return data;
      // eslint-disable-next-line semi
      }).then((info)=>{
        console.log(info);
        this.updateProductReview(info);
      });

    }


  }

  testCall() {
    let options = {
      // eslint-disable-next-line camelcase
      product_id: 47421, //select a specific item by id
      endpoint: 'styles', //null, styles, related
      parameters: { //if retrieving all products controls the amount returned
        page: null, //default is 1
        count: null //default is 5
      }
    // eslint-disable-next-line semi
    }

    $.get('/products', options, (data) => {
      console.log('data from server: ', data);
    // eslint-disable-next-line semi
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Overview/>
        <RelatedProducts/>
        <Outfit />
        {this.currentProductReviews !== undefined ? console.log(this.currentProductReviews) : console.log('not defined')}
        <button type='submit' onClick={this.testCall}>Poke the API</button>
      </div>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));