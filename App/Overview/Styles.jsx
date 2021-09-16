import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';

class Styles extends React.Component {
  static contextType = ProductIdContext;

  constructor(props) {
    super(props);
  }

  render() {
    return <div id={'styles-container'}>
      <p>Styles Component</p>
    </div>;
  }
}

export default Styles;