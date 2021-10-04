import React from 'react';
import ReactDOM from 'react-dom';
import './Review.css';
import Modal from './Modal.jsx';
import months from './months.js';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';
/*
needs:
currentUser
date
reviewTitle
reviewBody
helpfulCount
*/

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicModal: false
    };
  }

  render() {
    let date = new Date(this.props.data.date);
    let month = date.getUTCMonth(); //months from 0-11
    let monthName = months[month];
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    let newDate = monthName + ', ' + day + ', ' + year;
    console.log('review props', this.props);
    return (
      <div>
        <div className = {'review-header'}>
          <div id = {'stars'}>
            <StarRatingDisplay rating = {this.props.data.rating}/>
          </div>
          <div id = {'username'}>{this.props.data.reviewer_name + ', ' + newDate}</div>
        </div>
        <p className={'boldedFont'}>{this.props.data.summary}</p>
        <p>{this.props.data.body}</p>
        <div id = "photos">
          {this.props.data.photos.map((pic) => {
            return (
              <div id = "photo">
                <Modal photo = {pic}/>
              </div>
            );
          })}
        </div>
        {this.props.data.recommend ? <div id = 'recommend'>I recommend this product</div> : null}
        {this.props.data.response ? <div id = 'response'>{'Response from Seller:' + this.props.data.response}</div> : null}
        <div className = {'helpful-report'}>
          <div id = {'stats'}>{'Helpful? '}<button id ="yes" onClick = {this.clickedYes}>Yes</button></div>
          <div id = {'report'}>{'(' + this.props.data.helpfulness + ') | '}<button id ="report" onClick = {this.clickedReport}>Report</button></div>
        </div>
        <div id = {'line'}></div>
      </div>
    );
  }
}

export default Review;