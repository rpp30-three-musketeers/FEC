import React from 'react';
import ReactDOM from 'react-dom';
import './Reviews.css';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: 'Relevance'
    };
  }

  // componentDidMount(){

  // }


  render() {
    // console.log(this.props, 'review props');
    return (
      <div id={'reviews'}>
        <p>Ratings and Reviews</p>
        <div id={'content'}>
          <div id={'leftColumn'}>
            <LeftColumn rating = {this.props.avg} percentRecommend = {this.props.data.pctRecommend}/>
          </div>
          <div id={'rightColumn'}>
            <RightColumn reviews = {this.props.data.results} reviewCount = {this.props.data.results.length}
              sortedBy = {this.state.sortedBy}/>
          </div>
        </div>

      </div>
    );
  }
}

export default Reviews;