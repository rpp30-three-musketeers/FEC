import React from 'react';
import ReactDOM from 'react-dom';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <div id={'description-container'}>
      <h3>{this.props.slogan}</h3>
      <p>{this.props.description}</p>
    </div>;
  }
}

export default Description;