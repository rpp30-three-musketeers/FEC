import React from 'react';
import ReactDOM from 'react-dom';

/* eslint-disable func-style */
function Interactions(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      // make API POST request
      window.addEventListener('keydown', (event) => {
        console.log(event.target);
      });
    }

    render () {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default Interactions;