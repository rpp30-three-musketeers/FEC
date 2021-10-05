import React from 'react';
import { Select, InputLabel, MenuItem, FormControl, FormHelperText } from '@mui/material'

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedSKU: null};
    this.checkForAvailableSizes = this.checkForAvailableSizes.bind(this);
    this.renderSizeSelector = this.renderSizeSelector.bind(this);
  }

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

  renderSizeSelector() {
    // Only render options for SKU's that exist and have an available quantity
    if (this.checkForAvailableSizes()) {
      let defaultOption = 'OUT OF STOCK';
      return (
        <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
          <InputLabel id="demo-simple-select-disabled-label">HasStock</InputLabel>
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
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'default'}>OUT OF STOCK</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      )
    }
  }

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
      </div>
    )
  }
}

export default AddToCart;