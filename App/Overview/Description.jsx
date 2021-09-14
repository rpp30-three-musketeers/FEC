import React from 'react';
import ReactDOM from 'react-dom';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <div id={'description-container'}>
      <p>Description Component</p>
    </div>;
  }
}

export default Description;