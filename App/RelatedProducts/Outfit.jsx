import React from 'react';
import Product from './ProductCard.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="related-title">Your Outfit</p>
        <div id="outfit-window">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

      </div>
    );
  }
}

export default Outfit;