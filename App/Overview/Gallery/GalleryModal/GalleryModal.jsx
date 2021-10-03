import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navigateLeft = this.navigateLeft.bind(this);
    this.navigateRight = this.navigateRight.bind(this);
    this.renderLeftArrow = this.renderLeftArrow.bind(this);
    this.renderRightArrow = this.renderRightArrow.bind(this);
  }

  componentDidMount() {
    this.setState({currentStylePhotos: this.props.currentStylePhotos, selectedPhotoIndex: this.props.selectedPhotoIndex})
  }

  navigateLeft() {
    this.setState({selectedPhotoIndex: this.state.selectedPhotoIndex - 1});
  }

  renderLeftArrow() {
    if (this.state.selectedPhotoIndex <= 0) {
      return <div></div>
    } else {
      return <div className={'navigation-arrow-container left'}><FontAwesomeIcon icon={faAngleLeft} className={'gallery-modal-arrow'} onClick={this.navigateLeft} /></div>
    }
  }

  navigateRight() {
    this.setState({selectedPhotoIndex: this.state.selectedPhotoIndex + 1});
  }

  renderRightArrow() {
    if (this.state.selectedPhotoIndex >= this.state.currentStylePhotos.length - 1) {
      return <div></div>
    } else {
      return <div className={'navigation-arrow-container right'}><FontAwesomeIcon icon={faAngleRight} className={'gallery-modal-arrow'} onClick={this.navigateRight} /></div>
    }
  }

  render() {
    if (this.state.currentStylePhotos) {
      return (
        <div id={'gallery-modal'}>
          <div className={'exit-button'}><FontAwesomeIcon icon={faTimesCircle} onClick={this.props.onClick} /></div>
          <div className={'expanded-gallery-container'}>
            {this.renderLeftArrow()}
            <div id={'expanded-photo-container'}>
              <img className={'expanded-photo'} src={this.state.currentStylePhotos[this.state.selectedPhotoIndex].url}></img>
              <p id={'expanded-gallery-dots'}>Hello</p>
            </div>
            {this.renderRightArrow()}
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default GalleryModal;