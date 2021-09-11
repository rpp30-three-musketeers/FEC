import React from 'react';
import reactDOM from 'react-dom';
import './css/global.css';
import Header from './Header.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx'
import Outfit from './RelatedProducts/Outfit.jsx'
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.productIdExtractor = this.productIdExtractor.bind(this);
    this.testCall = this.testCall.bind(this);
  }

  productIdExtractor(url) {
    var productId = url.split('/')[3];
    this.setState({currentProductId: productId});
  }

  componentDidMount() {
    this.productIdExtractor(window.location.href);
  }

  testCall() {
    let options = {
      product_id: null, //select a specific item by id
      endpoint: null, //null, styles, related
      parameters: { //if retrieving all products controls the amount returned
        page: null, //default is 1
        count: null //default is 5
      }
    }

    $.get('/products', options, (data) => {
      console.log('data from server: ', data);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <p>Hello World</p>
        <button type='submit' onClick={this.testCall}>Poke the API</button>
        <RelatedProducts />
        <Outfit />
      </div>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));