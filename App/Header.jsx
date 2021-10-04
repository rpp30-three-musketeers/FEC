import React from 'react';
import ReactDOM from 'react-dom';
import {FaStar} from 'react-icons/fa';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id={'site-header'}>
      <p>Logo Here</p>
      <p>Search Here</p>
      <p><FaStar/></p>
    </div>);
  }
}

export default Header;