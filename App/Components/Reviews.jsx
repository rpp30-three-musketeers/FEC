import react from 'react';
import reactDOM from 'react-dom';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id = {'reviewsHeading'}><p>Ratings and  Reviews</p></div>
        <div id = {'leftColumn'}><p>Left Div</p></div>
        <div id = {'rightColum'}><p> right Div</p> </div>
      </div>
    );
  }
}

export default Reviews;