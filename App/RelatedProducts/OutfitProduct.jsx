import React from 'react';
import $ from 'jquery';

class OutfitProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: undefined,
      salePrice: undefined,
      img: undefined,
      name: undefined,
      category: undefined
    };
    this.getStyle = this.getStyle.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.loadPrice = this.loadPrice.bind(this);
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
        salePrice: data.results[0].sale_price,
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

  loadPrice() {
    if (this.state.salePrice) {
      return this.state.salePrice;
    }
    return this.state.price;
  }

  render() {
    return (
      <div>
        <div id="product-card" data-testid={'product-card'}>
          <div id="product-card-img">
            <img id="image" onClick={this.props.remove} src={this.state.img}/>
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

export default OutfitProduct;