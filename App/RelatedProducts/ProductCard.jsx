import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //$.get /styles
  //set state

  //$.get /id
  //set state


  render() {
    return (
      <div>
        <div id="product-card">
          <div id="product-card-img">
            <img id="image" src='https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'/>
          </div>
          <div id="product-card-attributes">
            <p id="product-card-category">Jackets</p>
            <p id="product-card-name" >Camo Onesie</p>
            <p id="product-card-price">$140</p>
            <p id="product-card-rating">***__</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;