import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';
import GallerySlider from './GallerySlider/GallerySlider.jsx';
import '../css/Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = ProductIdContext;

  render() {
    if (this.props.selectedPhotoIndex === undefined) {
      return null;
    } else {
      return (
        <div id={'gallery-container'} data-testid={'gallery-container'}>
          <GallerySlider currentStyle={this.props.currentStyle} photoSelector={this.props.photoSelector} topPhotoIndex={this.props.topPhotoIndex} moveThumbnailsDown={this.props.moveThumbnailsDown} moveThumbnailsUp={this.props.moveThumbnailsUp} />
          <img className={'mainPhoto'} src={(this.props.currentStyle.photos)[this.props.selectedPhotoIndex].url}></img>
        </div>
      )
    }
  }
}

export default Gallery;