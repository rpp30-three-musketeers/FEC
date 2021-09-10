import React from 'react';
import reactDOM from 'react-dom';
import './css/global.css';
import Header from './Header.jsx';
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
    this.testCall();
  }

  testCall() {
    $.get('/products', {product_id: 47422, }, (data) => {
      console.log('data from server: ', data);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <p>Hello World</p>
      </div>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));