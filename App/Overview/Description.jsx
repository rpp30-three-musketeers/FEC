import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    console.log('Context from description component: ' + this.context)
  }

  render() {
    return <div id={'description-container'}>
      <h3>{this.props.slogan}</h3>
      <p>{this.props.description}</p>
    </div>;
  }
}

export default Description;