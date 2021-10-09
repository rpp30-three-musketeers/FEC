import React from 'react';
import ReactDOM from 'react-dom';
import './Review.css';
import Modal from './Modal.jsx';
import months from './months.js';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';
import $ from 'jquery';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicModal: false,
      helpfulness: undefined,
      clickedYesStatus: false
    };
    this.clickedYes = this.clickedYes.bind(this);
    this.clickedReport = this.clickedReport.bind(this);

  }

  clickedYes() {
    if (this.state.clickedYesStatus === false) {
      let options = {
        review_id: this.props.data.review_id
      };
      console.log(this.props.data.review_id, 'props review id');
      console.log(options, 'clickedYes');
      $.post('/reviews/helpful', options, ()=>{
        this.setState({helpfulness: this.props.data.helpfulness + 1, clickedYesStatus: true});
      });
    }

  }
  clickedReport() {

    let options = {
      review_id: this.props.data.review_id
    };
    $.post('/reviews/report', options, ()=>{
      console.log('reported review');
    });


  }

  render() {
    let date = new Date(this.props.data.date);
    let month = date.getUTCMonth(); //months from 0-11
    let monthName = months[month];
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    let newDate = monthName + ', ' + day + ', ' + year;
    let helpful = this.state.helpfulness ? this.state.helpfulness : this.props.data.helpfulness;
    return (
      <div>
        <div className = {'review-header'}>
          <div id = {'stars'}>
            <StarRatingDisplay rating = {this.props.data.rating}/>
          </div>
          <div id = {'username'}>{this.props.data.reviewer_name + ', ' + newDate}</div>
        </div>
        <p className={'boldedFont'} id = {'summary'}>{this.props.data.summary}</p>
        <p>{this.props.data.body}</p>
        <div id = "photos">
          {this.props.data.photos.map((pic, index) => {
            return (
              <div id = "photo">
                <Modal photo = {pic} key = {index}/>
              </div>
            );
          })}
        </div>
        {this.props.data.recommend ? <div id = 'recommend'>I recommend this product</div> : null}
        {this.props.data.response ? <div id = 'response'>{'Response from Seller:' + this.props.data.response}</div> : null}
        <div className = {'helpful-report'}>
          <div id = {'stats'}>{'Helpful? '}<button id ="yes" onClick = {this.clickedYes}>Yes</button></div>
          <div id = {'report'}>{'(' + helpful + ') | '}<button id ="report" onClick = {this.clickedReport}>Report</button></div>
        </div>
        <div id = {'line'}></div>
      </div>
    );
  }
}

export default Review;