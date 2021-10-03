import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Comparison from './Comparison.jsx';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';
import {FaStar} from 'react-icons/fa';
import {FaRegStar} from 'react-icons/fa';

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
    this.navigateToProductPage = this.navigateToProductPage.bind(this);
  }

  componentDidMount() {
    this.getStyle();
    this.getInfo();
  }

  navigateToProductPage() {
    let url = window.location.href;
    let newUrl = url.slice(0, -5) + this.props.id;
    console.log(url);
    console.log(newUrl);

    location.assign(newUrl);
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
          <span id="product-card-icon" className='trackable-relatedProducts' onClick={this.openModal}><FaStar size={32}/></span>
          <div id="product-card-img">
            <img id="image" onClick={this.navigateToProductPage}src={this.state.img}/>
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