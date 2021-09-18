import React from 'react';
import ReactDOM from 'react-dom';


class StyleSwatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let swatch;
    if (this.props.currentStyleIndex === this.props.selectedStyleIndex) {
      swatch =
      <div className='style-swatch-container'>
        <div id='selected-style-check'>✓</div>
        <img className='style-swatch' src={this.props.style.photos[0].thumbnail_url} />
      </div>
    } else {
      swatch =
      <div className='style-swatch-container'>
        <img className='style-swatch' src={this.props.style.photos[0].thumbnail_url} />
      </div>
    }

    return (
      <div>
        {swatch}
      </div>
    )
  }
}

export default StyleSwatch;