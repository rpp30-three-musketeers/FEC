import React from 'react';
import ReactDOM from 'react-dom';
import './Reviews.css';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';
import ReviewForm from './ReviewForm.jsx';
import $ from 'jquery';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: 'Relevance',
      showReviewModal: false
    };

    this.handleAddReviewClick = this.handleAddReviewClick.bind(this);
    this.handleAddReviewExit = this.handleAddReviewExit.bind(this);
  }

  // componentDidMount(){

  // }

  handleAddReviewClick() {
    this.setState({showReviewModal: true});
  }
  handleAddReviewExit() {
    this.setState({showReviewModal: false});
  }


  render() {
    console.log(this.props, 'review props');
    return (
      <div id={'reviews'}>
        <p>Ratings and Reviews</p>
        <div id={'content'}>
          <div id={'leftColumn'}>
            <LeftColumn rating = {this.props.avg} percentRecommend = {this.props.data.pctRecommend}/>
          </div>
          <div id={'rightColumn'}>
            <RightColumn reviews = {this.props.data.results} reviewCount = {this.props.data.results.length}
              sortedBy = {this.state.sortedBy}/>
            <button id = 'addReview' onClick = {this.handleAddReviewClick}>+ Review</button>
            {this.state.showReviewModal ? <ReviewForm exit = {this.handleAddReviewExit}
              productName = {'productName'}/> : null}
          </div>
        </div>

      </div>
    );
  }
}

export default Reviews;