import React from 'react';

class GalleryThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event){
    console.log('clicked');
    this.props.photoSelector(this.props.photoIndex);
  }

  render() {
    let url = this.props.thumbnailURL;
    return (
      <div className={'gallery-thumbnail-container'} onClick={this.clickHandler} style={{backgroundImage: `url(${url})`}}></div>
    )
  }
}

export default GalleryThumbnail;