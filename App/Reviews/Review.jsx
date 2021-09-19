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

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicModal: false
    };
  }

  render() {
    let date = new Date(this.props.data.date);
    let month = date.getUTCMonth() + 1; //months from 1-12
    let monthName = months[month];
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    let newDate = monthName + ', ' + day + ', ' + year;

    return (
      <div>
        <div className = {'review-header'}>
          <div className = {'inlineDivs'}>stars</div>
          <div className = {'inlineDivs'}>{this.props.data.reviewer_name + ', ' + newDate}</div>
        </div>
        <p className={'boldedFont'}>{this.props.data.summary}</p>
        <p>{this.props.data.body}</p>
        {/* {this.propdata.photos.map((pic) => {
        // console.log(review, 'print review');
        return (
          <Modal photo = {pic}/>
        );
      })} */ }
        {this.props.data.recommend ? <div id = 'recommend'>I recommend this product</div> : null}
        {this.props.data.response ? <div id = 'response'>{'Response from Seller:' + this.props.data.response}</div> : null}
        <div className = {'helpful-report'}>
          <div className = {'inlineDivs'}>{'Helpful? '}</div> <div className = {'inlineDivs'}>{'Yes '}</div>
          <div className = {'inlineDivs'}>{'(' + this.props.data.helpfulness + ') | '}</div> <div className = {'inlineDivs'}> Report</div>
        </div>
        <p>_______________________________________________________________________________</p>
      </div>
    );
  }
}

export default Review;