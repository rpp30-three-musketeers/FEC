import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';
import './LeftColumn.css';
import RatedBar from './RatedBar.jsx';
import MarkerBar from './MarkerBar.jsx';

const LeftColumn = (props) => {

  return (
    <div>
      <div id = {'bigRating'}>
        <div id ={'averageRating'} title = {'rating'}>{props.avgRating}</div>
        <div id = {'averageStars'}>
          <StarRatingDisplay productId={props.pId} />
        </div>
      </div>
      <p id = {'pct'} title = {'pct'}>{props.percentRecommend + ' of reviews recommend this product'}</p>
      <div>
        {Object.keys(props.ratings).map((key, index) => {
        // console.log(review, 'print review');
          let percentTotal = props.numToPct(props.ratings[key] / props.reviewCount);
          return (
            <RatedBar star = {key} pctTotal = {percentTotal} count = {props.ratings[key]} key = {key}/>
          );
        })}
      </div>
      <div>
        {Object.keys(props.chars).map((key, index) => {

          return (
            <MarkerBar char = {key} key = {props.chars[key].id} value = {props.chars[key].id}/>
          );
        })}
      </div>
    </div>
  );
};

export default LeftColumn;