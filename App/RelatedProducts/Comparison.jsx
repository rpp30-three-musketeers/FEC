import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
  }

  //pass current via props
  //pass related via props



  render() {
    return(
      <div id="compare-products" onClick={this.props.close}>
        <div id="modal">
          Compare Products
          <table>
            <tr>
              <th>{this.props.mainProduct.name}</th>
              <th></th>
              <th>{this.props.relatedProduct.name}</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}


export default Comparison;