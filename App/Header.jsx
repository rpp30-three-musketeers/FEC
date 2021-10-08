import React from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id={'site-header'}>
      <p>Logo Here</p>
      <p>Search Here</p>
    </div>);
  }
}

export default Header;