import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ProductIdContext;

  render() {
    return <div id={'title-container'}>
      <p>Title Component</p>
    </div>;
  }
}

export default Title;