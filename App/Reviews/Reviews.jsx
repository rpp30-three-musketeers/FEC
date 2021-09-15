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
    console.log(this.props, 'review props');
    return (
      <div id={'reviews'}>
        <p>Ratings and Reviews</p>
        <div id={'content'}>
          <div id={'leftColumn'}>
            <LeftColumn rating = {this.props.results[0].rating} percentRecommend = {95}/>
          </div>
          <div id={'rightColumn'}>comments</div>
        </div>

      </div>
    );
  }
}

export default Reviews;