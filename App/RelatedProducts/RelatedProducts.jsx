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
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    this.getRelated();
    this.getInfo();
    this.loadProducts();
  }

  getRelated() {
    // eslint-disable-next-line camelcase
    $.get('/products', {product_id: this.context, endpoint: 'related'}, (data) => {
      this.setState({
        related: data
      });
    });
  }

  //ORIGINAL FX()
  // loadProducts() {
  //   if (this.state.related !== undefined) {
  //     let start = 2
  //     let end = start + 4;
  //     return (this.state.related.slice(start, end).map(item => {
  //       return <Product id={item} key={item} mainProduct={this.state.overviewProductInfo}/>;
  //     }));
  //   }
  // }

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

    //Retrieve product name and category
    getInfo() {
      // eslint-disable-next-line camelcase
      $.get('/products', {product_id: this.context}, (data) => {
        this.setState({
          overviewProductInfo: data,
        });
      });
    }

  render() {
    return (
      <div>
        <p className="related-title">Related Products</p>
        <p className="trackable-relatedProducts" onClick={this.moveLeft}>SCROLL LEFT</p>
        <p className="trackable-relatedProducts" onClick={this.moveRight}>SCROLL RIGHT</p>
        <div id="outfit-window" data-testid={'related-products-window'}>
          {this.loadProducts()}
        </div>

      </div>
    );
  }
}

export default RelatedProducts;