import React from 'react';
import ReactDOM from 'react-dom';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <div id={'title-container'}>
      <p>Title Component</p>
    </div>;
  }
}

export default Title;