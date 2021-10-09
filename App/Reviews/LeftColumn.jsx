import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingDisplay from '../StarRatings/StarRatingDisplay.jsx';
import './LeftColumn.css';
import RatedBar from './RatedBar.jsx';
import MarkerBar from './MarkerBar.jsx';

const LeftColumn = (props) => {
  let reversed = [];
  Object.keys(props.ratings).map((key, index) => {
    reversed.push(key);
  });
  let starsIndex = [];
  for (let i = 0; i <= reversed.length; i++) {
    starsIndex.push(reversed.pop());
  }
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
        {starsIndex.map((key, index) =>{
          let percentTotal = props.numToPct(props.ratings[key] / props.reviewCount);
          return (
            <RatedBar star = {key} pctTotal = {percentTotal} count = {props.ratings[key]} key = {key}/>
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