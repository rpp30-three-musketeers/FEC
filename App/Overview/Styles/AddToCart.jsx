import React from 'react';
import { Select, InputLabel, MenuItem, FormControl, FormHelperText, Button } from '@mui/material';
import EmptyStar from '../../StarRatings/icons/EmptyStar.jsx';
import Outfit from '../../RelatedProducts/Outfit.jsx';

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

  renderSizeSelector() {
    // Only render options for SKU's that exist and have an available quantity
    if (this.checkForAvailableSizes()) {
      return (
        <FormControl sx={{ m: 1, minWidth: 160 }}>
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
        <FormControl sx={{ m: 1, minWidth: 160 }} disabled>
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
          </Select>
        </FormControl>
      )
    }
  }

  renderAddToBag() {
    if (this.props.selectedSKU === 'default') {
      return (
        <div></div>
      )
    } else {
      return (
        <Button sx={{ m: 1, minWidth: 160 }} variant="contained" onClick={this.props.addToBagClick}>ADD TO BAG</Button>
      )
    }
  }

  render() {
    return (
      <div id={'add-to-cart'}>
        <FormControl fullWidth>
          {this.renderSizeSelector()}
        </FormControl>
        <FormControl fullWidth>
          {this.renderQtySelector()}
        </FormControl>
        {this.renderAddToBag()}
        <Button sx={{ m: 1, minWidth: 60, height: '4em', fontSize: '1em'}} variant="contained" onClick={() => {Outfit.prototype.addToOutfit()}}><EmptyStar /></Button>
      </div>
    )
  }
}

export default AddToCart;