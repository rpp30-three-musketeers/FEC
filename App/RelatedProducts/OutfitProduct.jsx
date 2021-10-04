import React from 'react';
import $ from 'jquery';
import {FaTimesCircle} from 'react-icons/fa';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';

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
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
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

  removeFromOutfit() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div>
        <div id="product-card" data-testid={'product-card'}>
          <span id="product-card-icon" className='trackable-Outfit' onClick={this.removeFromOutfit}><FaTimesCircle size={32}/></span>
          <div id="product-card-img">
            <img id="image" src={this.state.img}/>
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

export default OutfitProduct;