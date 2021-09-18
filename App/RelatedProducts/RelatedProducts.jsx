import React from 'react';
import Product from './ProductCard.jsx';
import Comparison from './Comparison.jsx';
import ProductIdContext from '../context.jsx';
import $ from 'jquery';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: undefined,
      currentProduct: 47455
    };
    this.getRelated = this.getRelated.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
    this.compareProducts = this.compareProducts.bind(this);
    this.setID = this.setID.bind(this);
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    this.getRelated();
    this.setID();
  }

  setID() {
    this.setState({
      currentProduct: this.context
    });
  }

  getRelated() {
    // eslint-disable-next-line camelcase
    $.get('/products', {product_id: this.state.currentProduct, endpoint: 'related'}, (data) => {
      this.setState({
        related: data
      });
    });
  }

  loadProducts() {
    if (this.state.related !== undefined) {
      return (this.state.related.slice(0, 4).map(item => {
        return <Product id={item} key={item} onClick={this.compareProducts(item)}/>;
      }));
    }
  }

  compareProducts(event) {
    return <Comparison current={this.state.currentProduct} other={event}/>;
  }

  render() {
    return (
      <div>
        <p className="related-title">Related Products</p>
        <div id="outfit-window">
          {this.loadProducts()}
        </div>

      </div>
    );
  }
}

export default RelatedProducts;