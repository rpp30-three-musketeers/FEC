import React from 'react';
import IndividualStar from './IndividualStar.jsx';
import ProductIdContext from '../context.jsx';
import $ from 'jquery';

class StarRatingDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.starsArray = this.starsArray.bind(this);
  }

  static contextType = ProductIdContext;

  starsArray(rating) {
    rating = parseFloat(rating);
    // console.log('rating inside stars function: ' + rating);
    if (rating === 0) {
      this.setState({'starsArray': [0, 0, 0, 0, 0]});
    } else {
      var stars = [0, 0, 0, 0, 0];
      var wholeStars = Math.floor(rating);

      // console.log('whole stars: ' + wholeStars);
      var pctRemainder = (rating - wholeStars) * 100;

      var closestQuarter = (Math.round(pctRemainder/25)) * 25;

      for (var i = 0; i < wholeStars; i++) {
        stars[i] = 100;
      }

      if (wholeStars < 5) {
        stars[wholeStars] = closestQuarter;
      }

      this.setState({'starsArray': stars});
    }
  }

  async componentDidMount() {

    var averageRating = await $.get('/get-average-rating/', {productId: this.props.productId}, (data) => { // options not used for this, refactor later
      return(data);
    });

    await this.starsArray(averageRating);
  }

  render() {
    if (!this.state.starsArray) {
      return null;
    } else {
      return (
        this.state.starsArray.map((starPct, index) => {
          return <IndividualStar pctFull={starPct} key={index} />
        })
      )
      // return <div>test</div>
    }

  }
}

export default StarRatingDisplay;