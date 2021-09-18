import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ProductIdContext;

  render() {
    return <div id={'description-container'} data-testid={'description-container'}>
      <h3>{this.props.slogan}</h3>
      <p>{this.props.description}</p>
    </div>;
  }
}

export default Description;