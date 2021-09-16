import React from 'react';
import Product from './ProductCard.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [47421, 47425, 47454, 47432],
    };
  }

  render() {
    return (
      <div>
        <p className="related-title">Your Outfit</p>
        <div id="outfit-window">
          {this.state.outfit.map(item => {
            return <Product id={item} key={item}/>;
          })}
        </div>

      </div>
    );
  }
}

export default Outfit;