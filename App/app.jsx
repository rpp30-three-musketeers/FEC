import React from 'react';
import reactDOM from 'react-dom';
import './css/global.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <div><p>Hello World</p></div>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));