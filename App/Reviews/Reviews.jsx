import React from 'react';
import ReactDOM from 'react-dom';
import './Reviews.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id={'reviews'}>
        <p>Ratings and Reviews</p>
        <div id={'content'}>
          <div id={'leftColumn'}>Star</div>
          <div id={'rightColumn'}>comments</div>
        </div>

      </div>
    );
  }
}

export default Reviews;