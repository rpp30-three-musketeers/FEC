import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import './css/Related.css';
import Header from './Header.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Outfit from './RelatedProducts/Outfit.jsx';
import Overview from './Overview/Overview.jsx';
import Reviews from './Reviews/Reviews.jsx';
import $ from 'jquery';
import { ProductIdProvider } from './context.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 47421,
      productReviews: [],
      averageRating: null

    };

    this.productIdExtractor = this.productIdExtractor.bind(this);
    this.testCall = this.testCall.bind(this);
  }

  productIdExtractor(url) {
    let newProductId = url.split('/')[3];
    this.setState({currentProductId: newProductId});
  }
  componentDidUpdate(prevProps, prevState) {
    let newUrl = window.location.href;
    let newProductId = parseInt(newUrl.split('/')[3]);
    if (prevState.currentProductId !== newProductId) {
      //need to make new get request for updated comments on current product id
      let options = {
        // eslint-disable-next-line camelcase
        product_id: newProductId, //select a specific item by id
      // eslint-disable-next-line semi
      }

      $.get('/reviews/', options, (data) => { // options not used for this, refactor later
        return data;
      // eslint-disable-next-line semi
      }).then((info)=>{
        //console.log(info);
        this.setState({currentProductId: newProductId, productReviews: info, averageRating: info.averageRating});
      });
    }
    // if(this.state.)
    // this.productIdExtractor(newUrl);
  }

  componentDidMount() {
    //this.productIdExtractor(window.location.href);

    if (this.currentProductReviews === undefined) {
      let options = {
        // eslint-disable-next-line camelcase
        product_id: this.state.currentProductId, //select a specific item by id
      // eslint-disable-next-line semi
      }

      $.get('/reviews/', options, (data) => { // options not used for this, refactor later
        return data;
      // eslint-disable-next-line semi
      }).then((info)=>{
        //console.log(info);
        this.setState({productReviews: info, averageRating: info.averageRating});
      });
    }
  }

  reviewApiCall() {

  }

  testCall() {
    let options = {
      // eslint-disable-next-line camelcase
      product_id: 47423, //select a specific item by id
      endpoint: null, //null, styles, related
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
    let renderReviews = this.state.productReviews.length === 0 ? false : true;
    return (
      <ProductIdProvider value={window.location.href.split('/')[3]}>
        <div>
          <Header />
          <Overview/>
          <RelatedProducts/>
          <Outfit />
          {renderReviews ? <Reviews data = {this.state.productReviews} avg = {this.state.averageRating}/> : null}
          <button type='submit' onClick={this.testCall}>Poke the API</button>
        </div>
      </ProductIdProvider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));