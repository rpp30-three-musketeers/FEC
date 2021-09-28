import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';

const RightColumn = (props) => {
  return (
    <div>
      <p>{props.reviewCount + ' reviews, sorted by ' + props.sortedBy}</p>
      {props.reviews.map((review) => {
        // console.log(review, 'print review');
        return (
          <Review data = {review} key = {review.review_id}/>
        );
      })}
    </div>
  );
};

export default RightColumn;