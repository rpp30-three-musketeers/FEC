import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="compare-products">
        <div id="current-product">
        </div>
        <div id="versus-product">
        </div>
      </div>
    )
  }
}

export default Comparison;