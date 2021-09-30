import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery.jsx';
import Description from './Description.jsx';
import Features from './Features.jsx';
import Title from './Title.jsx';
import Styles from './Styles.jsx';
import $ from 'jquery';
import '../css/Overview.css';
import ProductIdContext from '../context.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styleSelector = this.styleSelector.bind(this);
    this.photoSelector = this.photoSelector.bind(this);
    this.resetPhotoIndex = this.resetPhotoIndex.bind(this);
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    $.get('/products', {product_id: this.context}, (data) => {
      this.setState({currentId: data.id, productName: data.name, productSlogan: data.slogan, productDescription: data.description, productDefaultPrice: data.default_price, productFeatures: data.features});
    });
    $.get('/products', {product_id: this.context, endpoint: 'styles'}, (data) => {
      this.setState({styles: data.results, selectedStyleIndex: 0, selectedPhotoIndex: 0});
    });

  }

  styleSelector(index) {
    this.setState({selectedStyleIndex: index});
  }

  photoSelector(index) {
    this.setState({selectedPhotoIndex: index})
  }

  resetPhotoIndex() {
    this.setState({selectedPhotoIndex: 0})
  }

  render() {
    if (this.state.averageRating !== null && this.state.styles) {
      return (
        <div id={'overview-container'} data-testid={'overview-container'}>
          {/* <p>Overview Component</p> */}
          <Gallery currentStyle={this.state.styles[this.state.selectedStyleIndex]} photoSelector={this.photoSelector} selectedPhotoIndex={this.state.selectedPhotoIndex}/>
          <div id={'basics'}>
            <Title />
            <Styles styles={this.state.styles} selectedStyleIndex={this.state.selectedStyleIndex} styleSelector={this.styleSelector} resetPhotoIndex={this.resetPhotoIndex}/>
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