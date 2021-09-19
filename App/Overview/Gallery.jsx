import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ProductIdContext;

  render() {
    return <div id={'gallery-container'} data-testid={'gallery-container'}>
      <p>Gallery Component</p>
    </div>;
  }
}

export default Gallery;