import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import ProductIdContext from '../context.jsx';
import ReviewForm from './ReviewForm.jsx';

class RightColumn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showReviewModal: false,
      reviewQuantityToShow: 2,
    };
    this.handleShowMoreReviews = this.handleShowMoreReviews.bind(this);
    this.handleAddReviewClick = this.handleAddReviewClick.bind(this);
    this.handleAddReviewExit = this.handleAddReviewExit.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }


  static contextType = ProductIdContext;

  handleShowMoreReviews() {
    this.setState({reviewQuantityToShow: this.state.reviewQuantityToShow + 2});
  }

  handleAddReviewClick() {
    this.setState({showReviewModal: true});
  }
  handleAddReviewExit() {
    this.setState({showReviewModal: false});
  }

  handleSortChange(event){
    this.props.sortedBy(event.target.value)
  }

  render() {
    let last = this.state.reviewQuantityToShow;
    return (
      <>
        <div>
          <div>{this.props.reviewCount + ' reviews, sorted by '}
          <select name="sortBy" id="sortBy" onChange = {this.handleSortChange}>
            <option value="relevant">Relevant</option>
            <option value="newest">Newest</option>
            <option value="Helpful">Helpful</option>
          </select></div>
          {this.props.reviews.slice(0, last).map((review, index)=>{
            return (
              <Review data = {review} key = {review.review_id}/>
            );
          })}

        </div>
        <button id = 'addReview' onClick = {this.handleAddReviewClick}>Add Review</button>
        <button id = 'showMoreReviews' onClick = {this.handleShowMoreReviews}>Show More</button>
        {this.state.showReviewModal ?
          <ReviewForm exit = {this.handleAddReviewExit} productName = {this.props.productName} productId = {this.context}
          characteristics = {this.props.characteristics}/>
          : null}
      </>
    );
  }
}

export default RightColumn;