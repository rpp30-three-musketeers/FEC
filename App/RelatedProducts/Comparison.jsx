import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
  }

  //pass current via props
  //pass related via props

  render() {
    return (
      <div id="compare-products">
        <div id="current-product">
        </div>
        <div id="versus-product">
        </div>
      </div>
    );
  }
}

export default Comparison;