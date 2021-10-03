import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../../context.jsx';
import GallerySlider from './GallerySlider/GallerySlider.jsx';
import GalleryModal from './GalleryModal/GalleryModal.jsx';
import '../../css/Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.displayModal = this.displayModal.bind(this);
  }

  static contextType = ProductIdContext;

  toggleModal() {
    this.setState({modalView: !this.state.modalView})
  }

  displayModal() {
    if (this.state.modalView) {
      return <GalleryModal onClick={this.toggleModal} currentStylePhotos={this.props.currentStyle.photos} selectedPhotoIndex={this.props.selectedPhotoIndex} />
    }
  }

  render() {
    if (this.props.selectedPhotoIndex === undefined) {
      return null;
    } else {
      return (
        <div id={'gallery-container'} data-testid={'gallery-container'}>
          {this.displayModal()}
          <GallerySlider currentStyle={this.props.currentStyle} photoSelector={this.props.photoSelector} topPhotoIndex={this.props.topPhotoIndex} moveThumbnailsDown={this.props.moveThumbnailsDown} moveThumbnailsUp={this.props.moveThumbnailsUp} />
          <img className={'mainPhoto'} onClick={this.toggleModal} src={(this.props.currentStyle.photos)[this.props.selectedPhotoIndex].url}></img>
        </div>
      )
    }
  }
}

export default Gallery;