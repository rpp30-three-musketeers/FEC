import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';
import ProductIdContext from '../context.jsx';
import '../css/Title.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    $.get('/products', {product_id: this.context}, (data) => {
      this.setState({currentId: data.id, productName: data.name, productCategory: data.category});
    });
  }

  render() {
    if (!this.state.currentId) {
      return null
    } else if (this.props.averageRating === null) {
      return null
    } else {
      return (
        <div id={'title-container'} data-testid={'title-container'}>
          <StarRatingDisplay productId={this.context} />
          <h3 className={'product-category'}>{this.state.productCategory}</h3>
          <h1 className={'product-title'}>{this.state.productName}</h1>
        </div>
      )
    }
  }
}

export default Title;