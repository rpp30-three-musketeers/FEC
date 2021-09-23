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
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    this.getRelated();
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
      return (this.state.related.slice(0, 4).map(item => {
        return <Product id={item} key={item} />;
      }));
    }
  }


  render() {
    return (
      <div>
        <p className="related-title">Related Products</p>
        <div id="outfit-window" data-testid={'related-products-window'}>
          {this.loadProducts()}
        </div>

      </div>
    );
  }
}

export default RelatedProducts;