import React from 'react';
import Product from './ProductCard.jsx';
import ProductIdContext from '../context.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [],
    };
    this.getOutfit = this.getOutfit.bind(this);
    this.setOutfit = this.setOutfit.bind(this);
    this.loadOutfit = this.loadOutfit.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.createOutfitStorage = this.createOutfitStorage.bind(this);
  }

  static contextType = ProductIdContext;

  componentDidMount() {
    this.createOutfitStorage();
    this.getOutfit();
  }

  createOutfitStorage() {
    if(!localStorage.outfit) {
      localStorage.outfit = JSON.stringify([]);
    }
    return;
  }

  setOutfit(target) {
    let currentOutfit = this.state.outfit;
    currentOutfit.push(target);
    localStorage.outfit = JSON.stringify(currentOutfit);
  }

  getOutfit() {
    let storedOutfit = JSON.parse(localStorage.outfit);

    this.setState({
      outfit: storedOutfit
    });
  }

  addToOutfit() {
    let currentOutfit = this.state.outfit;
    let newProduct = JSON.parse(this.context);
    //add product to outfit if not already present
    if (!currentOutfit.includes(newProduct)){
      currentOutfit.push(newProduct);
      localStorage.outfit = JSON.stringify(currentOutfit);
      this.getOutfit();
    }
  }

  removeFromOutfit() {
    let currentOutfit = this.state.outfit;
    let targetProduct = JSON.parse(this.context);

    if (currentOutfit.includes(targetProduct)){
      //remove target product from outfit list
      currentOutfit = currentOutfit.filter((item) => {
        return item !== targetProduct;
      })
      localStorage.outfit = JSON.stringify(currentOutfit);
      this.getOutfit();
    }
  }

  loadOutfit() {
    if (this.state.outfit.length > 0) {
      return (
        this.state.outfit.slice(0, 3).map(item => {
          return <Product id={item} key={item}/>;
        })
      );
    }
  }

  render() {
    return (
      <div>
        <p className="related-title" data-testid={'outfit-window'}>Your Outfit</p>
        <div id="outfit-window">
          <div id="add-to-outfit">
            <p>Add To Outfit</p>
            <button onClick={this.addToOutfit}>Add To Outfit</button>
            <button onClick={this.removeFromOutfit}>Remove From Outfit</button>
          </div>
          {this.loadOutfit()}
        </div>

      </div>
    );
  }
}

export default Outfit;