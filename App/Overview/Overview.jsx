import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery.jsx';
import Description from './Description.jsx';
import Features from './Features.jsx';
import Title from './Title.jsx';
import Styles from './Styles.jsx';
import '../css/Overview.css';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id={'overview-container'}>
      {/* <p>Overview Component</p> */}
      <Gallery />
      <div id={'basics'}>
        <Title />
        <Styles />
      </div>
      <Description />
      <Features />
    </div>;
  }
}

export default Overview;