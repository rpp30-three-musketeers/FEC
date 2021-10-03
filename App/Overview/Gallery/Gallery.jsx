import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../../context.jsx';
import GallerySlider from './GallerySlider/GallerySlider.jsx';
import GalleryModal from './GalleryModal/GalleryModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalView: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.navigateDefaultLeft = this.navigateDefaultLeft.bind(this);
    this.renderLeftArrow = this.renderLeftArrow.bind(this);
    this.navigateDefaultRight = this.navigateDefaultRight.bind(this);
    this.renderRightArrow = this.renderRightArrow.bind(this);
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

  navigateDefaultLeft() {
    this.props.photoSelector(this.props.selectedPhotoIndex - 1);
  }

  renderLeftArrow() {
    if (this.props.selectedPhotoIndex === undefined || this.props.selectedPhotoIndex === 0 || this.state.modalView === true) {
      return (<div id={'left-arrow-default'} />)
    } else {
      return (<div id={'left-arrow-default'}><FontAwesomeIcon icon={faAngleLeft} className={'gallery-arrow'} onClick={this.navigateDefaultLeft} /></div>)
    }
  }

  navigateDefaultRight() {
    this.props.photoSelector(this.props.selectedPhotoIndex + 1);
  }

  renderRightArrow() {
    if (this.props.selectedPhotoIndex === undefined || this.props.selectedPhotoIndex >= this.props.currentStyle.photos.length - 1 || this.state.modalView === true) {
      return (<div id={'right-arrow-default'} />)
    } else {
      return (<div id={'right-arrow-default'}><FontAwesomeIcon icon={faAngleRight} className={'gallery-arrow'} onClick={this.navigateDefaultRight} /></div>)
    }
  }

  render() {
    if (this.props.selectedPhotoIndex === undefined) {
      return null;
    } else {
      return (
        <div id={'gallery-container'} data-testid={'gallery-container'}>
          {this.displayModal()}
          <GallerySlider currentStyle={this.props.currentStyle} photoSelector={this.props.photoSelector} topPhotoIndex={this.props.topPhotoIndex} moveThumbnailsDown={this.props.moveThumbnailsDown} moveThumbnailsUp={this.props.moveThumbnailsUp} selectedPhotoIndex={this.props.selectedPhotoIndex} />
          {this.renderLeftArrow()}
          <img className={'mainPhoto'} onClick={this.toggleModal} src={(this.props.currentStyle.photos)[this.props.selectedPhotoIndex].url}></img>
          {this.renderRightArrow()}
        </div>
      )
    }
  }
}

export default Gallery;