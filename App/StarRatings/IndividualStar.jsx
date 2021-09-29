import React from 'react';
import FullStar from './icons/FullStar.jsx';
import ThreeQuarterStar from './icons/ThreeQuarterStar.jsx';
import HalfStar from './icons/HalfStar.jsx';
import QuarterStar from './icons/QuarterStar.jsx';
import EmptyStar from './icons/EmptyStar.jsx';
import './IndividualStar.css';

class IndividualStar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.pctFull === 100) {
      return (<span><FullStar /></span>)
    } else if (this.props.pctFull === 75) {
      return (<span><ThreeQuarterStar id={'half-star'} /></span>)
    } else if (this.props.pctFull === 50) {
      return (<span><HalfStar /></span>)
    } else if (this.props.pctFull === 25) {
      return (<span><QuarterStar /></span>)
    } else {
      return (<span><EmptyStar /></span>)

    }
  }
}

export default IndividualStar;