import React from 'react';
import ReactDOM from 'react-dom';
import './Reviews.css';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';
import ReviewForm from './ReviewForm.jsx';
import $ from 'jquery';
import ProductIdContext from '../context.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 47421,
      sortedBy: 'Relevance',
      productReviews: 'needToInitialize',
      averageRating: null,
      showReviewModal: false,
      productName: 'Camo Onesie'

    };

    this.handleAddReviewClick = this.handleAddReviewClick.bind(this);
    this.handleAddReviewExit = this.handleAddReviewExit.bind(this);
    this.reviewApiCall = this.reviewApiCall.bind(this);
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    //console.log('component did mount function');

    let options = {
      // eslint-disable-next-line camelcase
      product_id: this.context
    };
    this.reviewApiCall(options);

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.productId !== this.state.productId) {
      console.log('inside prev props if statement');
      let options = {
        // eslint-disable-next-line camelcase
        product_id: this.state.productId
      };
      $.get('/products', {product_id: this.context}, (data) => {
        this.reviewApiCall(options, data.name);
      });
    }
  }

  handleAddReviewClick() {
    this.setState({showReviewModal: true});
  }
  handleAddReviewExit() {
    this.setState({showReviewModal: false});
  }

  reviewApiCall(parameters, pName) {

    $.get('/reviews/', parameters, (data) => {
      return data;
    // eslint-disable-next-line semi
    }).then((info)=> {
      console.log(info, 'reviews data');
      if(pName) {
        this.setState({productReviews: info, averageRating: info.averageRating, productName: pName});
      } else {
        this.setState({productReviews: info, averageRating: info.averageRating});
      }
    });
  }


  render() {
    let renderReviews = this.state.productReviews === 'needToInitialize' ? false : true;
    console.log(this.state, '<<<<<<<state')
    return (
      renderReviews ?
        <div id={'reviews'}>
          <p>Ratings and Reviews</p>
          <div id={'content'}>
            <div id={'leftColumn'}>
              <LeftColumn rating = {this.state.averageRating} percentRecommend = {this.state.productReviews.pctRecommend}/>
            </div>
            <div id={'rightColumn'}>
              <RightColumn reviews = {this.state.productReviews.results} reviewCount = {this.state.productReviews.results.length}
                sortedBy = {this.state.sortedBy}/>
              <button id = 'addReview' onClick = {this.handleAddReviewClick}>+ Review</button>
              {this.state.showReviewModal ? <ReviewForm exit = {this.handleAddReviewExit} productName = {this.state.productName}/> : null}
            </div>
          </div>
        </div> : <div> {console.log('divs mounted')}</div>
    );
  }
}

export default Reviews;