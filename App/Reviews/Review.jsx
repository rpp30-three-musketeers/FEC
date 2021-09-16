import React from 'react';
import ReactDOM from 'react-dom';
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
      <div>
        <div>stars</div>
        <div>{props.currentUser + ', ' + props.data.date}</div>
      </div>
      <p className={'boldedFont'}>{props.data.reviewTitle}</p>
      <p>{props.data.reviewBody}</p>
      <div>
        Helpful? <div>Yes</div> <div>{'(' + props.data.helpfulCount + ') | '}</div> <div>Report</div>
      </div>
      <p>_______________________________________________________________________________</p>
    </div>
  );
};

export default Review;