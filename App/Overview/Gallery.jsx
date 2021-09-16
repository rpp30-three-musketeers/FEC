import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    console.log('context from Gallery component: ' + this.context)
  }

  render() {
    return <div id={'gallery-container'}>
      <p>Gallery Component</p>
    </div>;
  }
}

export default Gallery;