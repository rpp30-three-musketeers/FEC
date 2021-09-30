import React from 'react';
import GalleryThumbnail from './GalleryThumbnail.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

class GallerySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.moveDown = this.moveDown.bind(this);
    // this.moveUp = this.moveUp.bind(this);
  }

  render() {
    if (!this.props.currentStyle.photos) {
      return null;
    }
    // IF 7 or less photos
    if (this.props.currentStyle.photos.length <= 7) {
      let thumbnails = (this.props.currentStyle.photos).map((photoURLs, index) => {
        return <GalleryThumbnail key={index} photoIndex={index} thumbnailURL={photoURLs.thumbnail_url} photoSelector={this.props.photoSelector}></GalleryThumbnail>
      })
      // return all photos
      return (
        <div id={'gallery-slider-default-view'}>
          {thumbnails}
        </div>
      )
    // IF 8 or more photos
    } else {
      // IF topPhotoIndex is zero
      if (this.props.topPhotoIndex === 0) {
        let thumbnails = (this.props.currentStyle.photos).slice(0,7).map((photoURLs, index) => {
          return <GalleryThumbnail key={index} photoIndex={index} thumbnailURL={photoURLs.thumbnail_url} photoSelector={this.props.photoSelector}></GalleryThumbnail>
        })
        // return first 7 photos and down arrow
        return (
          <div id={'gallery-slider-default-view'}>
            {thumbnails}
            <FontAwesomeIcon className={'gallery-arrow'} icon={faAngleDown} onClick={this.moveDown} />
          </div>
        )
      // IF topPhotoIndex is not zero
      } else {
        // IF 7 or less remaining photos
        if ((this.props.currentStyle.photos).slice(this.props.topPhotoIndex).length <= 7) {
          let thumbnails = (this.props.currentStyle.photos).slice(this.props.topPhotoIndex).map((photoURLs, index) => {
            return <GalleryThumbnail key={index} photoIndex={index + this.props.topPhotoIndex} thumbnailURL={photoURLs.thumbnail_url} photoSelector={this.props.photoSelector}></GalleryThumbnail>
          })
          // return up arrow and then remaining photos
          return (
            <div id={'gallery-slider-default-view'}>
              <FontAwesomeIcon className={'gallery-arrow'} icon={faAngleUp} onClick={this.moveUp} />
              {thumbnails}
            </div>
          )
        // IF 8 or more remaining photos
        } else {
          let thumbnails = (this.props.currentStyle.photos).slice(this.props.topPhotoIndex, 7).map((photoURLs, index) => {
            return <GalleryThumbnail key={index} photoIndex={index + this.state.topPhotoIndex} thumbnailURL={photoURLs.thumbnail_url} photoSelector={this.props.photoSelector}></GalleryThumbnail>
          })
          // return up arrow, next 7 photos, down arrow
          return (
            <div id={'gallery-slider-default-view'}>
              <FontAwesomeIcon className={'gallery-arrow'} icon={faAngleUp} onClick={this.moveUp} />
              {thumbnails}
              <FontAwesomeIcon className={'gallery-arrow'} icon={faAngleDown} onClick={this.moveDown} />
            </div>
          )
        }
      }
    }
  }
}

export default GallerySlider

// 7 or less photos
  // return a map of all photos
// 8 or more photos
  // topPhotoIndex is zero
    // return first 7 photos, and a down arrow
  // topPhotoIndex is not zero
    // 7 or less remaining photos
      // return up arrow, next 7 photos
    // 8 or more remaining photos
      // return up arrow, next 7 photos, down arrow