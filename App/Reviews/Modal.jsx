import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleClick.bind(this);
  }

  componentDidUpdate() {
    if (this.state.toggle) {
      //show big
    } else {
      //show small
    }
  }

  handleClick(e) {
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    return (
      <div onClick = {this.handleClick}>
        <img src = {this.props.photo.url}></img>
      </div>
    );
  }
}

export default Modal;