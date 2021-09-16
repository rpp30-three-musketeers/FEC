import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';

class Styles extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ProductIdContext;

  render() {
    return <div id={'styles-container'}>
      <p>Styles Component</p>
    </div>;
  }
}

export default Styles;