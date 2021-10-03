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
          let starIndex = (key - 6)*-1;
          let percentTotal = props.numToPct(props.ratings[starIndex] / props.reviewCount);
          return (
            <RatedBar star = {starIndex} pctTotal = {percentTotal} count = {props.ratings[starIndex]} key = {starIndex}/>
          );
        })}
      </div>
      <div>
        {Object.keys(props.chars).map((key, index) => {

          return (
            <MarkerBar char = {key} key = {props.chars[key].id} value = {props.chars[key].value}/>
          );
        })}
      </div>
    </div>
  );
};

export default LeftColumn;