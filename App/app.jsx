import React from 'react';
import reactDOM from 'react-dom';
import './css/global.css';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.productIdExtractor = this.productIdExtractor.bind(this);

  }

  productIdExtractor(url) {
    var productId = url.split('/')[3];
    this.setState({currentProductId: productId});
  }

  componentDidMount() {
    this.productIdExtractor(window.location.href);
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