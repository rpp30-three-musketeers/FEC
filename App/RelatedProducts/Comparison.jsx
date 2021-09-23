import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.displayCheck = this.displayCheck.bind(this);
  }

  //pass current via props
  //pass related via props

  displayCheck() {
    if (this.props.showModal) {
      return (
        <div className="compare-products">
          <table>
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
          </table>
        </div>
      )
    }
  }


  render() {
    return (
      <div id="compare-products">
        <div id="modal">
          hi, hello, its me
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