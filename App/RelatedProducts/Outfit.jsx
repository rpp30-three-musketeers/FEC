import React from 'react';
import OutfitProduct from './OutfitProduct.jsx';
import ProductIdContext from '../context.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [],
    };
    this.getOutfit = this.getOutfit.bind(this);
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

  //Creates localStorage arr for outfit if none currently exists
  createOutfitStorage() {
    if(!localStorage.outfit) {
      localStorage.outfit = JSON.stringify([]);
    }
    return;
  }

  //Retrieves outfit from localStorage
  getOutfit() {
    let storedOutfit = JSON.parse(localStorage.outfit);
    this.setState({
      outfit: storedOutfit
    });
  }

  //Appends new productID from context to outfit. Calls getoutfit to update state and rerender.
  addToOutfit() {
    let currentOutfit = this.state.outfit;
    let newProduct = JSON.parse(this.context);

    if (!currentOutfit.includes(newProduct)){
      currentOutfit.push(newProduct);
      localStorage.outfit = JSON.stringify(currentOutfit);
      this.getOutfit();
    }
  }

  //Removes productID from outfit
  removeFromOutfit(target) {
    let currentOutfit = this.state.outfit;
    // let targetProduct = JSON.parse(this.context);

    if (currentOutfit.includes(target)){
      //remove target product from outfit list
      currentOutfit = currentOutfit.filter((item) => {
        return item !== target;
      })
      localStorage.outfit = JSON.stringify(currentOutfit);
      this.getOutfit();
    }
  }

  loadOutfit() {
    if (this.state.outfit.length > 0) {
      return (
        this.state.outfit.slice(0, 3).map(item => {
          return <OutfitProduct id={item} key={item} remove={this.removeFromOutfit}/>;
        })
      );
    }
  }

  render() {
    return (
      <div>
        <p className="related-title" data-testid={'outfit-window'}>Your Outfit</p>
        <div id="outfit-window">
          <div onClick={this.addToOutfit} className='trackable-Outfit' id="add-to-outfit">
            <p>Add To Outfit</p>
          </div>
          {this.loadOutfit()}
        </div>

      </div>
    );
  }
}

export default Outfit;