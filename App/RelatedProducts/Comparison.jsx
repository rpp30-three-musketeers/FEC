import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuresList: undefined
    }
    this.compareFeatures = this.compareFeatures.bind(this);
  }

  componentDidMount() {
    this.compareFeatures();
  }

  //Combines features from the overview and related product into one data object based on feature type
  compareFeatures() {
    let mainFeatures = this.props.mainProduct.features;
    let relatedFeatures = this.props.relatedProduct.features;
    let combinedFeatures = [];

    //adds overview product data from props to container variable
    mainFeatures.forEach((item) => {
      let node = {};
      node.feature = item.feature;

      //if feature does not have discreet value assigns boolean
      if(item.value === null) {
        node.mainValue = true;
      } else {
        node.mainValue = item.value;
      }
      node.relatedValue = false;
      combinedFeatures.push(node);
    })

    //iterates through related features prop list
    relatedFeatures.forEach((item) => {
      let targetFeature = item.feature;
      var featureIsShared = false;
      //compare each feature in related to container array. If present assign related value
      for (var i = 0; i < combinedFeatures.length; i++) {
        if (combinedFeatures[i].feature === targetFeature) {
          featureIsShared = true;
          if(item.value === null) {
            combinedFeatures[i].relatedValue = true;
          } else {
            combinedFeatures[i].relatedValue = item.value;
          }
          return;
        }

      }
      //if related feature not present, add with overvalue set to false
      if(!featureIsShared){
        let node = {};
        node.feature = item.feature;
        if(item.value === null) {
          node.relatedValue = true;
        } else {
          node.relatedValue = item.value;
        }
        node.mainValue = false;
        combinedFeatures.push(node);
      }
    });

    console.log('combinedFeatures', combinedFeatures);
    //update State...
    this.setState({
      featuresList: combinedFeatures
    })
  }

  render() {
    return(
      <div id="compare-products" onClick={this.props.close}>
        <div id="modal">
          Compare Products
          <table>
            <tr>
              <th>{this.props.mainProduct.name}</th>
              <th></th>
              <th>{this.props.relatedProduct.name}</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}


export default Comparison;