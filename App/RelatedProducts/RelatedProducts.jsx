import React from 'react';
import Product from './ProductCard.jsx';
import $ from 'jquery';

//TODO:
//  *Map only 4 products




class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [47422, 47423, 47428, 47427],
      currentProduct: 47421
    };
    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {
    this.getRelated();
  }

  //retrieve list of related products
  getRelated() {
    // eslint-disable-next-line camelcase
    $.get('/products', {product_id: this.state.currentProduct, endpoint: 'related'}, (data) => {
      this.setState({
        related: data
      });
    });
  }


  //for reach related product $.get /id and /styles\



  render() {
    return (
      <div>
        <p className="related-title">Related Products</p>
        <div id="outfit-window">
          {this.state.related.slice(0, 4).map(item => {
            return <Product id={item} key={item}/>;
          })}
        </div>

      </div>
    );
  }
}

export default RelatedProducts;