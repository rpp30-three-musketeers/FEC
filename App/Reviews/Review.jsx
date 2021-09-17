import React from 'react';
import ReactDOM from 'react-dom';
import './Review.css';
/*
needs:
currentUser
date
reviewTitle
reviewBody
helpfulCount
*/

const Review = (props) => {

  return (
    <div>
      <div className = {'review-header'}>
        <div className = {'inlineDivs'}>stars</div>
        <div className = {'inlineDivs'}>{props.data.reviewer_name + ', ' + props.data.date}</div>
      </div>
      <p className={'boldedFont'}>{props.data.summary}</p>
      <p>{props.data.body}</p>
      <div className = {'helpful-report'}>
        <div className = {'inlineDivs'}>{'Helpful? '}</div> <div className = {'inlineDivs'}>{'Yes '}</div>
        <div className = {'inlineDivs'}>{'(' + props.data.helpfulness + ') | '}</div> <div className = {'inlineDivs'}> Report</div>
      </div>
      <p>_______________________________________________________________________________</p>
    </div>
  );
};

export default Review;