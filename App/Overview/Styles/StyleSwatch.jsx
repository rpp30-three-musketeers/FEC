import React from 'react';
import ReactDOM from 'react-dom';


class StyleSwatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='style-swatch-container'>
        <div id='selected-style-check'>✓</div>
        <img className='style-swatch' src={this.props.style.photos[0].thumbnail_url} />
      </div>
    )
  }
}

export default StyleSwatch;