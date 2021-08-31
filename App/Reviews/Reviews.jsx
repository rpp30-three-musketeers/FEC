import React from 'react';
import ReactDOM from 'react-dom';
import './Reviews.css';
import LeftColumn from './LeftColumn.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){

  // }

  render() {
    return (
      <div id={'reviews'}>
        <p>Ratings and Reviews</p>
        <div id={'content'}>
          <div id={'leftColumn'}>
            <LeftColumn rating = {3.5} percentRecommend = {91}/>
          </div>
          <div id={'rightColumn'}>comments</div>
        </div>

      </div>
    );
  }
}

export default Reviews;