import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery/Gallery.jsx';
import Description from './Description.jsx';
import Features from './Features.jsx';
import Title from './Title.jsx';
import Styles from './Styles/Styles.jsx';
import $ from 'jquery';
import '../css/Overview.css';
import ProductIdContext from '../context.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedSKU: 'default', selectedQty: 1};
    this.styleSelector = this.styleSelector.bind(this);
    this.photoSelector = this.photoSelector.bind(this);
    this.moveThumbnailsDown = this.moveThumbnailsDown.bind(this);
    this.moveThumbnailsUp = this.moveThumbnailsUp.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.addToBagClick = this.addToBagClick.bind(this);
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    $.get('/products', {product_id: this.context}, (data) => {
      this.setState({currentId: data.id, productName: data.name, productSlogan: data.slogan, productDescription: data.description, productDefaultPrice: data.default_price, productFeatures: data.features});
    });
    $.get('/products', {product_id: this.context, endpoint: 'styles'}, (data) => {
      this.setState({styles: data.results, selectedStyleIndex: 0, selectedPhotoIndex: 0, topPhotoIndex: 0});
    });
  }

  changeSize(e) {
    if (e.target.value === 'default') {
      this.setState({selectedSKU: 'default', selectedQty: 1})
    } else {
      this.setState({selectedSKU: e.target.value, selectedQty: 1})
    }
  }

  changeQuantity(e) {
    this.setState({selectedQty: e.target.value})
  }

  addToBagClick() {
    this.setState({selectedSKU: 'default', selectedQty: 1});
  }

  styleSelector(index) {
    this.setState({selectedStyleIndex: index, selectedPhotoIndex: 0, topPhotoIndex: 0, selectedSKU: 'default', selectedQty: 1});
  }

  photoSelector(index) {
    this.setState({selectedPhotoIndex: index})
  }

  moveThumbnailsDown() {
    this.setState({topPhotoIndex: this.state.topPhotoIndex + 7})
  }

  moveThumbnailsUp() {
    this.setState({topPhotoIndex: this.state.topPhotoIndex - 7})
  }

  render() {
    if (this.state.averageRating !== null && this.state.styles) {
      return (
        <div id={'overview-container'} data-testid={'overview-container'}>
          {/* <p>Overview Component</p> */}
          <Gallery currentStyle={this.state.styles[this.state.selectedStyleIndex]} photoSelector={this.photoSelector} selectedPhotoIndex={this.state.selectedPhotoIndex} topPhotoIndex={this.state.topPhotoIndex} moveThumbnailsDown={this.moveThumbnailsDown} moveThumbnailsUp={this.moveThumbnailsUp}/>
          <div id={'basics'}>
            <Title />
            <Styles styles={this.state.styles} selectedStyleIndex={this.state.selectedStyleIndex} styleSelector={this.styleSelector} changeSize={this.changeSize} changeQuantity={this.changeQuantity} selectedSKU={this.state.selectedSKU} selectedQty={this.state.selectedQty} addToBagClick={this.addToBagClick} />
          </div>
          <Description slogan={this.state.productSlogan} description={this.state.productDescription} />
          <Features features={this.state.productFeatures} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Overview;