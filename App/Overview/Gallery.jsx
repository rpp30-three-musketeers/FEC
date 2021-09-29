import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';
import GallerySlider from './GallerySlider/GallerySlider.jsx';
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
      return (
        <div id={'gallery-container'} data-testid={'gallery-container'}>
          <GallerySlider currentStyle={this.props.currentStyle} />
          <img className={'mainPhoto'} src={(this.props.currentStyle.photos)[this.state.selectedPhotoIndex].url}></img>
        </div>
      )
    }
  }
}

export default Gallery;