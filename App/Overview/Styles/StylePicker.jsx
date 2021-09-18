import React from 'react';
import ReactDOM from 'react-dom';
import StyleSwatch from './StyleSwatch.jsx';
import $ from 'jquery';

class StylePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(event) {

  // }

  render() {
    let swatches = this.props.styles.map((style, index) => {return <StyleSwatch style={style} key={index} currentStyleIndex={index} selectedStyleIndex={this.props.selectedStyleIndex} styleSelector={this.props.styleSelector} />})

    return (
      <div className='style-picker-container'>
        {swatches}
      </div>
    )
  }
}

export default StylePicker;