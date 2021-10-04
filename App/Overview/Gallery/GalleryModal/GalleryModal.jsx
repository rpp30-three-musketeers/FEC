import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navigateLeft = this.navigateLeft.bind(this);
    this.navigateRight = this.navigateRight.bind(this);
    this.renderLeftArrow = this.renderLeftArrow.bind(this);
    this.renderRightArrow = this.renderRightArrow.bind(this);
    this.navigateToSelected = this.navigateToSelected.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
    this.renderZoomBox = this.renderZoomBox.bind(this);
  }

  componentDidMount() {
    this.setState({currentStylePhotos: this.props.currentStylePhotos, selectedPhotoIndex: this.props.selectedPhotoIndex, zoomOn: false})
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

  navigateToSelected(e) {
    // console.dir(e.target.parentNode.attributes.thisindex.value); // string of index
    this.setState({selectedPhotoIndex: parseInt(e.target.parentNode.attributes.thisindex.value)})
  }

  toggleZoom() {
    this.setState({zoomOn: !this.state.zoomOn})
  }

  renderZoomBox() {
    if (this.state.zoomOn === true) {
      return <div id={'lens'} onClick={this.toggleZoom}>Helkj</div>
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
              {this.renderZoomBox()}
              <img id={'expanded-view-photo'} className={'expanded-photo'} src={this.state.currentStylePhotos[this.state.selectedPhotoIndex].url} onClick={this.toggleZoom}></img>
              {/* <p id={'expanded-gallery-dots'}>Hello</p> */}
              <div id={'expanded-gallery-dots'}>
                {this.state.currentStylePhotos.map((photo, index) => {
                  if (index === this.state.selectedPhotoIndex) {
                    return <FontAwesomeIcon key={index} thisindex={index} icon={faCircle} className={'expanded-gallery-dot selected-gallery-dot'} onClick={this.navigateToSelected} />
                  } else {
                    return <FontAwesomeIcon key={index} thisindex={index} icon={faCircle} className={'expanded-gallery-dot'} onClick={this.navigateToSelected} />
                  }
                })}
              </div>
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