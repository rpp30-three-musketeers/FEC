import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';
import ProductIdContext from '../context.jsx';
import '../css/Title.css';
class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewAllReviews = this.viewAllReviews.bind(this);
  }
  static contextType = ProductIdContext;
  viewAllReviews() {
    const anchor = document.querySelector('#reviews');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
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
          <span><p className={'readAllReviewsLink'} style={{display:'inline-block', fontSize: '0.75em', margin: '0.65em', textDecoration: 'underline'}} onClick={this.viewAllReviews}>Read all reviews</p></span>
          <h3 className={'product-category'}>{this.state.productCategory}</h3>
          <h1 className={'product-title'}>{this.state.productName}</h1>
        </div>
      )
    }
  }
}
export default Title;