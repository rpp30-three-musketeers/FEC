import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ProductIdContext from '../context.jsx';

class Features extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = ProductIdContext;

  componentDidUpdate() {
    console.log('features: ' + this.props.features);
    this.render();
  }

  render() {
    if (this.props.features) {
      return <div id={'features-container'} data-testid={'features-container'}>
        {this.props.features.map((feature, index) => {
          if (!feature.value) {
            return <p key={index}>✔ {feature.feature}</p>
          } else {
            return <p key={index}>✔ {feature.feature}: {feature.value}</p>;
          }
        })}
      </div>;
    } else {
      return null;
    }
  }
}

export default Features;