import React from 'react';
import ReactDOM from 'react-dom';
import './Review.css';
import Modal from './Modal.jsx';
import months from './months.js';
/*
needs:
currentUser
date
reviewTitle
reviewBody
helpfulCount
*/

const Review = (props) => {
  let date = new Date(props.data.date);
  let month = date.getUTCMonth() + 1; //months from 1-12
  let monthName = months[month];
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();

  let newDate = monthName + ', ' + day + ', ' + year;
  console.log(newDate);

  return (
    <div>
      <div className = {'review-header'}>
        <div className = {'inlineDivs'}>stars</div>
        <div className = {'inlineDivs'}>{props.data.reviewer_name + ', ' + newDate}</div>
      </div>
      <p className={'boldedFont'}>{props.data.summary}</p>
      <p>{props.data.body}</p>
      {props.data.photos.map((pic) => {
        // console.log(review, 'print review');
        return (
          <Modal photo = {pic}/>
        );
      })}
      {props.data.recommend ? <div id = 'recommend'>I recommend this product</div> : null}
      {props.data.response ? <div id = 'response'>{'Response from Seller:' + props.data.response}</div> : null}
      <div className = {'helpful-report'}>
        <div className = {'inlineDivs'}>{'Helpful? '}</div> <div className = {'inlineDivs'}>{'Yes '}</div>
        <div className = {'inlineDivs'}>{'(' + props.data.helpfulness + ') | '}</div> <div className = {'inlineDivs'}> Report</div>
      </div>
      <p>_______________________________________________________________________________</p>
    </div>
  );
};

export default Review;