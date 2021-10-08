import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.toggle && prevState.toggle !== this.state.toggle) {
      console.log('shows modal');
      // this.props.photoModal();
      //show big
    } else {
      console.log('hides modal');
      //show small
    }
  }

  handleClick(e) {
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    return (
      <div onClick = {this.handleClick} className = {this.state.toggle ? 'photoModal' : null}>
        <img src = {this.props.photo.url} id = {'reviewImage'}></img>
      </div>
    );
  }
}

export default Modal;