import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Features extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('features: ' + this.props.features);
    this.render();
  }

  render() {
    if (this.props.features) {
      return <div id={'features-container'}>
        {this.props.features.map((feature) => { return <p>✔ {feature.feature}: {feature.value}</p>; })}
      </div>;
    } else {
      return null;
    }
  }
}

export default Features;