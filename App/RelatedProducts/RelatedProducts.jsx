import React from 'react';
import Product from './ProductCard.jsx'

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Related Products</p>
        <div id="outfit-window">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

    </div>
    )
  }
}

export default RelatedProducts;