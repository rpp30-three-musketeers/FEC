import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Comparison from './Comparison.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: undefined,
      salePrice: undefined,
      img: undefined,
      name: undefined,
      category: undefined,
      showModal: false
    };
    this.getStyle = this.getStyle.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.loadPrice = this.loadPrice.bind(this);
    this.compareProducts = this.compareProducts.bind(this);
  }

  componentDidMount() {
    this.getStyle();
    this.getInfo();
  }

  //Retrieve product price and image
  getStyle() {
    // eslint-disable-next-line camelcase
    $.get('/products', {product_id: this.props.id, endpoint: 'styles'}, (data) => {
      this.setState({
        price: data.results[0].original_price,
        salePrice: data.results[0].sale_price,
        img: data.results[0].photos[0].url
      });
    });
  }

  //Retrieve product name and category
  getInfo() {
    // eslint-disable-next-line camelcase
    $.get('/products', {product_id: this.props.id}, (data) => {
      this.setState({
        name: data.name,
        category: data.category
      });
    });
  }

  //Display sale price if included in product data, else display standard price
  loadPrice() {
    if (this.state.salePrice) {
      return this.state.salePrice;
    }
    return this.state.price;
  }

  compareProducts() {
    console.log('How dare you judge me...');
    this.setState({
      showModal: true
    })
  }

  render() {
    return (
      <div>
        <Comparison showModal={this.state.showModal} />
        <div id="product-card" data-testid={'product-card'}>
          <div id="product-card-img">
            <img id="image" onClick={this.compareProducts} src={this.state.img}/>
          </div>
          <div id="product-card-attributes">
            <p id="product-card-category" title={'category'}>{this.state.category}</p>
            <p id="product-card-name" title={'name'}>{this.state.name}</p>
            <p id="product-card-price" title={'price'}>${this.loadPrice()}</p>
            <p id="product-card-rating" title={'rating'}>***__</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;