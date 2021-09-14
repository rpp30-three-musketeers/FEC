import React from 'react';
import ReactDOM from 'react-dom';

class Features extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <div id={'features-container'}>
      <p>Features Component</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        <li>Feature 4</li>
        <li>Feature 5</li>
      </ul>
    </div>;
  }
}

export default Features;