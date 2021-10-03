import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={'gallery-modal'}>
        <div className={'exit-button'}><FontAwesomeIcon icon={faTimesCircle} onClick={this.props.onClick} /></div>
        <p>Goodbye</p>
      </div>
    )
  }
}

export default GalleryModal;