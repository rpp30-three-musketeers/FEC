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
      overviewProductInfo: undefined
      carouselStart: 0
    };
    this.getRelated = this.getRelated.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.getInfo = this.getInfo.bind(this);
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

  loadProducts() {
    if (this.state.related !== undefined) {
      let start = 2
      let end = start + 4;
      return (this.state.related.slice(start, end).map(item => {
        return <Product id={item} key={item} mainProduct={this.state.overviewProductInfo}/>;
      }));
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
          <BiChevronLeftSquare/>
          <BiChevronRightSquare/>
        <div id="outfit-window" data-testid={'related-products-window'}>
          {this.loadProducts()}
        </div>

      </div>
    );
  }
}

export default RelatedProducts;