import React from 'react';
import ReactDOM from 'react-dom';
import ProductIdContext from '../context.jsx';
import StylePicker from './Styles/StylePicker.jsx';
import $ from 'jquery';
import '../css/Styles.css';

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static contextType = ProductIdContext;

  // componentDidMount() {
  //   $.get('/products', {product_id: this.context, endpoint: 'styles'}, (data) => {
  //     this.setState({styles: data.results, selectedStyleIndex: 0});
  //   });
  // }

  render() {
    let price;
    if (this.props.styles && this.props.styles[this.props.selectedStyleIndex].sale_price) {
      price = <p><span style={{color: 'red', paddingRight: '0.5em'}}>${Number(this.props.styles[this.props.selectedStyleIndex].sale_price)}</span><span style={{textDecorationLine: "line-through"}}>${Number(this.props.styles[this.props.selectedStyleIndex].original_price)}</span></p>
    } else if (this.props.styles && !this.props.styles[this.props.selectedStyleIndex].sale_price) {
      price = <p>${Number(this.props.styles[this.props.selectedStyleIndex].original_price)}</p>
    }

    if (!this.props.styles) {
      return null;
    } else {
      return (
        <div id={'styles-container'} data-testid={'styles-container'}>
          {price}
          <h3 className='style-title'>Style ></h3>
          <h3 className='style-title' style={{fontWeight: 'normal'}}>{this.props.styles[this.props.selectedStyleIndex].name}</h3>
          <StylePicker styles={this.props.styles} selectedStyleIndex={this.props.selectedStyleIndex} styleSelector={this.props.styleSelector} />
        </div>
      )
    }

  }
}

export default Styles;