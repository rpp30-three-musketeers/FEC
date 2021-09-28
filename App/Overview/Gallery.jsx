import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';
import GalleryThumbnail from './GallerySlider/GalleryThumbnail.jsx'
import '../css/Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    this.setState({selectedPhotoIndex: 0})
  }

  render() {
    if (this.state.selectedPhotoIndex === undefined) {
      return null;
    } else {
      let thumbnails = (this.props.currentStyle.photos).slice(0,7).map((photoURLs, index) => {
        return <GalleryThumbnail key={index} thumbnailURL={photoURLs.thumbnail_url}></GalleryThumbnail>
      })

      return (
        <div id={'gallery-container'} data-testid={'gallery-container'}>
          <div id={'gallery-slider-default-view'}>
            {thumbnails}
          </div>
          <img className={'mainPhoto'} src={(this.props.currentStyle.photos)[this.state.selectedPhotoIndex].url}></img>
        </div>
      )
    }
  }
}

export default Gallery;