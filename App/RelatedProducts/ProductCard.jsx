import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Comparison from './Comparison.jsx';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: undefined,
      price: undefined,
      salePrice: undefined,
      img: undefined,
      name: undefined,
      category: undefined,
      features: undefined,
      renderModal: false
    };
    this.getStyle = this.getStyle.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.loadPrice = this.loadPrice.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
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
        productInfo: data,
        name: data.name,
        category: data.category,
        features: data.features
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

  openModal() {
    this.setState({
      renderModal: true
    })
  }

  closeModal() {
    this.setState({
      renderModal: false
    })
  }

  renderModal() {
    if (this.state.renderModal === true){
      return (
        <div>
          <Comparison mainProduct={this.props.mainProduct} relatedProduct={this.state.productInfo} close={this.closeModal}/>
        </div>
      )
    }
  }



  render() {
    return (
      <div>
        {this.renderModal()}
        <div id="product-card" data-testid={'product-card'}>
          <div id="product-card-img">
            <img id="image" onClick={this.openModal} src={this.state.img}/>
          </div>
          <div id="product-card-attributes">
            <p id="product-card-category" title={'category'}>{this.state.category}</p>
            <p id="product-card-name" title={'name'}>{this.state.name}</p>
            <p id="product-card-price" title={'price'}>${this.loadPrice()}</p>
            <p id="product-card-rating" title={'rating'}><StarRatingDisplay productId={this.props.id}/></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;