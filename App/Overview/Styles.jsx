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

  componentDidMount() {
    $.get('/products', {product_id: this.context, endpoint: 'styles'}, (data) => {
      this.setState({styles: data.results, selectedStyleIndex: 0});
    });
  }

  render() {
    let price;
    if (this.state.styles && this.state.styles[this.state.selectedStyleIndex].sale_price) {
      price = <p><span style="text-decoration: line-through">${Number(this.state.styles[this.state.selectedStyleIndex].original_price)}</span><span>${Number(this.state.styles[this.state.selectedStyleIndex].sale_price)}</span></p>
    } else if (this.state.styles && !this.state.styles[this.state.selectedStyleIndex].sale_price) {
      price = <p>${Number(this.state.styles[this.state.selectedStyleIndex].original_price)}</p>
    }

    if (!this.state.styles) {
      return null;
    } else {
      return (
        <div id={'styles-container'}>
          {price}
          <h3 className='style-title'>Style ></h3>
          <h3 className='style-title' style={{fontWeight: 'normal'}}>{this.state.styles[this.state.selectedStyleIndex].name}</h3>
          <StylePicker styles={this.state.styles} selectedStyleIndex={this.state.selectedStyleIndex} />
        </div>
      )
    }

  }
}

export default Styles;