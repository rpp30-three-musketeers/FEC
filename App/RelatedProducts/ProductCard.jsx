import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="product-card">
          <div id="product-card-img">
          <img id="image" src='https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'/>
          </div>
          <div id="product-card-attribute">
          <p>Jackets</p>
          <p>Camo Onesie</p>
          <p>$140</p>
          <p>***__</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;