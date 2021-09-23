import React from 'react';
import Product from './ProductCard.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: [],
    };
    this.getOutfit = this.getOutfit.bind(this);
    this.setOutfit = this.setOutfit.bind(this);
    this.loadOutfit = this.loadOutfit.bind(this);
  }

  componentDidMount() {
    this.setOutfit(47452);
    this.setOutfit(47489);
    this.setOutfit(47474);
    this.getOutfit();
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
          </div>

          {this.loadOutfit()}
          {/* {this.state.outfit.slice(0, 3).map(item => {
            return <Product id={item} key={item}/>;
          })} */}
        </div>

      </div>
    );
  }
}

export default Outfit;