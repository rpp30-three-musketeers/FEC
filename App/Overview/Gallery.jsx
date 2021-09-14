import React from 'react';
import ReactDOM from 'react-dom';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <div id={'gallery-container'}>
      <p>Gallery Component</p>
    </div>;
  }
}

export default Gallery;