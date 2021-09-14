import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="product-card">
          <p>I'm a product</p>
          <div>Button</div>
          <div>Image</div>
          <div>Category</div>
          <div>Expanded Name</div>
          <div>Price</div>
          <div>Star Rating</div>

        </div>

      </div>
    )
  }
}

export default Product;