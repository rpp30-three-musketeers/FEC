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
          I'm a modal
        </div>
          {/* <table>
            <tr>
              <th style="width:50%">Features</th>
              <th>Basic</th>
              <th>Pro</th>
            </tr>
            <tr>
              <td>Sample text</td>
              <td><i className="fa fa-remove"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <td>Sample text</td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
          </table> */}
      </div>
    )
  }
}


export default Comparison;