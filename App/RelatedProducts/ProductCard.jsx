import React from 'react';
import $ from 'jquery';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: undefined,
      img: undefined,
      name: undefined,
      category: undefined
    };
    this.getStyle = this.getStyle.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getStyle();
    this.getInfo();
  }

  getStyle() {
    // eslint-disable-next-line camelcase
    $.get('/products', {product_id: this.props.id, endpoint: 'styles'}, (data) => {
      this.setState({
        price: data.results[0].original_price,
        img: data.results[0].photos[0].url
      });
    });
  }

  getInfo() {
    // eslint-disable-next-line camelcase
    $.get('/products', {product_id: this.props.id}, (data) => {
      this.setState({
        name: data.name,
        category: data.category
      });
    });
  }

  render() {
    return (
      <div>
        <div id="product-card">
          <div id="product-card-img">
            <img id="image" src={this.state.img}/>
          </div>
          <div id="product-card-attributes">
            <p id="product-card-category">{this.state.category}</p>
            <p id="product-card-name" >{this.state.name}</p>
            <p id="product-card-price">{this.state.price}</p>
            <p id="product-card-rating">***__</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;