import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={'gallery-modal'}>
        <div className={'exit-button'}><FontAwesomeIcon icon={faTimesCircle} onClick={this.props.onClick} /></div>
        <div className={'expanded-photo-container'}>
          <div className={'navigation-arrow-container left'}><FontAwesomeIcon icon={faAngleLeft} className={'gallery-modal-arrow'}/></div>
          <img className={'expanded-photo'} src={this.props.currentStylePhotos[this.props.selectedPhotoIndex].url}></img>
          <div className={'navigation-arrow-container right'}><FontAwesomeIcon icon={faAngleRight} className={'gallery-modal-arrow'} /></div>
        </div>
      </div>
    )
  }
}

export default GalleryModal;