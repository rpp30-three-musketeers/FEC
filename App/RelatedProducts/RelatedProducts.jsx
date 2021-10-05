import React from 'react';
import Product from './ProductCard.jsx';
import Comparison from './Comparison.jsx';
import ProductIdContext from '../context.jsx';
import $ from 'jquery';
import {BiChevronLeftSquare, BiChevronRightSquare} from 'react-icons/bi';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: undefined,
      overviewProductInfo: undefined,
      carouselStart: 0
    };
    this.getRelated = this.getRelated.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.renderLeftButton = this.renderLeftButton.bind(this);
    this.renderRightButton = this.renderRightButton.bind(this);
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    this.getRelated();
    this.getInfo();
    this.loadProducts();
  }

  getInfo() {
    $.get('/products', {product_id: this.context}, (data) => {
      this.setState({
        overviewProductInfo: data,
      });
    });
  }

  getRelated() {
    $.get('/products', {product_id: this.context, endpoint: 'related'}, (data) => {
      this.setState({
        related: data
      });
    });
  }

  loadProducts() {
    if (this.state.related !== undefined) {
      let start = this.state.carouselStart;
      let end = start + 4;
      return (this.state.related.slice(start, end).map(item => {
        return <Product id={item} key={item} mainProduct={this.state.overviewProductInfo}/>;
      }));
    }
  }

  moveLeft() {
    var currentStart = this.state.carouselStart;
    if (currentStart > 0) {
      currentStart = currentStart - 1;
      this.setState({
        carouselStart: currentStart
      })
    }
  }

  moveRight() {
    var currentStart = this.state.carouselStart;
    if (currentStart < this.state.related.length - 4) {
      currentStart = currentStart + 1;
      this.setState({
        carouselStart: currentStart
      })
    }
  }

  renderLeftButton() {
    if(this.state.carouselStart > 0) {
      return (
        <div>
          <BiChevronLeftSquare className="trackable-relatedProducts" id="scroll-icon" onClick={this.moveLeft} size={40}/>
        </div>
      )
    }
  }

  renderRightButton() {

    if(this.state.related !== undefined && this.state.carouselStart < this.state.related.length - 4)

    if(this.state.carouselStart < 4) {
      return (
        <div>
          <BiChevronRightSquare className="trackable-relatedProducts" id="scroll-icon" onClick={this.moveRight} size={40}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>

        {this.renderRightButton()}
        {this.renderLeftButton()}

        <p className="related-title">Related Products</p>
        <div id="outfit-window" data-testid={'related-products-window'}>
          {this.loadProducts()}
        </div>
      </div>
    );
  }
}

export default RelatedProducts;