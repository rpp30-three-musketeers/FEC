import React from 'react';

class GalleryThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event){
    this.props.photoSelector(this.props.photoIndex);
  }

  render() {
    let url = this.props.thumbnailURL;
    if (this.props.selectedPhotoIndex === this.props.photoIndex) {
      return (
        <div className={'gallery-thumbnail-container selected-gallery-thumbnail'} onClick={this.clickHandler} style={{backgroundImage: `url(${url})`}}></div>
      )
    } else {
      return (
        <div className={'gallery-thumbnail-container'} onClick={this.clickHandler} style={{backgroundImage: `url(${url})`}}></div>
      )
    }
  }
}

export default GalleryThumbnail;