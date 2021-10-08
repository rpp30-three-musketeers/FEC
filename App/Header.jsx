import React from 'react';
import ReactDOM from 'react-dom';
import {BiSearchAlt} from 'react-icons/bi';
import {GiSwordHilt} from 'react-icons/gi';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div id={'site-header'}>
      <div>
      <GiSwordHilt size={50}/>
      <GiSwordHilt size={50}/>
      <GiSwordHilt size={50}/>
      </div>
      Atelièr
      <BiSearchAlt size={50}/>
    </div>);
  }
}

export default Header;