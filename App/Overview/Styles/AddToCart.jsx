import React from 'react';
import { Select, InputLabel, MenuItem, FormControl, FormHelperText, Button } from '@mui/material'

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.checkForAvailableSizes = this.checkForAvailableSizes.bind(this);
    this.renderSizeSelector = this.renderSizeSelector.bind(this);
    this.getSizes = this.getSizes.bind(this);
    // this.changeSize = this.changeSize.bind(this);
    this.renderQtySelector = this.renderQtySelector.bind(this);
    this.renderAddToBag = this.renderAddToBag.bind(this);
    // this.changeQuantity = this.changeQuantity.bind(this);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     selectedSKU: 'default', selectedQty: 1
  //   }
  // }

  checkForAvailableSizes() {
    if (!this.props.skus || this.props.skus.length === 0) {
      return false;
    } else {
      let hasOption = false;
      for (var x in this.props.skus) {
        if (this.props.skus[x].quantity > 0) {
          hasOption = true;
        }
      }
      return hasOption
    }
  }

  getSizes() {
    let sizes = [];
    for (var x in this.props.skus) {
      if (this.props.skus[x].quantity > 0) {
        sizes.push({sku: x, size: this.props.skus[x].size, quantity: this.props.skus[x].quantity})
      }
    }
    return sizes;
  }

  // changeSize(e) {
  //   if (e.target.value === 'default') {
  //     this.setState({selectedSKU: 'default', selectedQty: 1})
  //   } else {
  //     this.setState({selectedSKU: e.target.value, selectedQty: 1})
  //   }
  // }

  renderSizeSelector() {
    // Only render options for SKU's that exist and have an available quantity
    if (this.checkForAvailableSizes()) {
      return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            displayEmpty
            value={this.props.selectedSKU}
            label="Size"
            onChange={this.props.changeSize}
          >
            <MenuItem value={'default'}>SELECT SIZE</MenuItem>
            {this.getSizes().map((sku, index) => {return (<MenuItem key={index} value={sku.sku}>{sku.size}</MenuItem>)})}
          </Select>
        </FormControl>
      )
    } else {
      return (
        <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
          <InputLabel id="demo-simple-select-disabled-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            displayEmpty
            value={'default'}
            label="Size"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'default'}>OUT OF STOCK</MenuItem>
          </Select>
        </FormControl>
      )
    }
  }

  renderQtySelector() {
    if (this.props.selectedSKU === 'default') {
      return (
        <FormControl sx={{ m: 1, minWidth: 60 }} disabled>
          <InputLabel id="demo-simple-select-disabled-label">Qty</InputLabel>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            displayEmpty
            value={'default'}
            label="Qty"
            // onChange={handleChange}
          >
            <MenuItem value={'default'}>-</MenuItem>
          </Select>
        </FormControl>
      )
    } else {
      let qtyOptions = [];
      for (var i = 1; i <= this.props.skus[this.props.selectedSKU].quantity && i <= 15; i++) {
        qtyOptions.push(i);
      }
      return (
        <FormControl sx={{ m: 1, minWidth: 60 }}>
          <InputLabel id="demo-simple-select-label">Qty</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-"
            displayEmpty
            value={this.props.selectedQty}
            label="Qty"
            onChange={this.props.changeQuantity}
          >
            {qtyOptions.map((qty) => {return ((<MenuItem key={qty} value={qty}>{qty}</MenuItem>))})}
            {/* <MenuItem value={1}>1</MenuItem> */}
          </Select>
        </FormControl>
      )
    }
  }

  renderAddToBag() {
    if (this.props.selectedSKU === 'default') {
      return (
        <Button sx={{ m: 1, minWidth: 120 }} variant="contained" disabled>ADD TO BAG</Button>
      )
    } else {
      return (
        <Button sx={{ m: 1, minWidth: 120 }} variant="contained">ADD TO BAG</Button>
      )
    }
  }

  // changeQuantity(e) {
  //   this.setState({selectedQty: e.target.value})
  // }

  render() {
    return (
      <div id={'add-to-cart'}>
        {/* <button>Hello</button>
        <button>Hello</button>
        <button>Hello</button>
        <button>Hello</button> */}
        <FormControl fullWidth>
          {this.renderSizeSelector()}
        </FormControl>
        <FormControl fullWidth>
          {this.renderQtySelector()}
        </FormControl>
        {this.renderAddToBag()}
        <Button sx={{ m: 1, minWidth: 60 }} variant="contained">STAR</Button>
      </div>
    )
  }
}

export default AddToCart;