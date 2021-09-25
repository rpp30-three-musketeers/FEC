import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuresList: undefined
    }
    this.compareFeatures = this.compareFeatures.bind(this);
    this.renderFeatures = this.renderFeatures.bind(this);
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
        node.mainValue = '✔';
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
            combinedFeatures[i].relatedValue = '✔';
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
          node.relatedValue = '✔';
        } else {
          node.relatedValue = item.value;
        }
        node.mainValue = false;
        combinedFeatures.push(node);
      }
    });

    // console.log('combinedFeatures', combinedFeatures);
    this.setState({
      featuresList: combinedFeatures
    })
  }


  renderFeatures() {
    let featuresList = this.state.featuresList;
    if (featuresList !== undefined) {
      return (featuresList.map((item, key) => {
        return (
          <tr key={item.feature}>
            <td>{item.mainValue}</td>
            <td>{item.feature}</td>
            <td>{item.relatedValue}</td>
          </tr>
        )
      }));
    }
  }

  render() {
    return(
      <div id="compare-products" onClick={this.props.close}>
        <div id="modal">
          Compare
          <table className={"modal-table"}>
            <tbody>
            <tr>
              <th>{this.props.mainProduct.name}</th>
              <th></th>
              <th>{this.props.relatedProduct.name}</th>
            </tr>
            {this.renderFeatures()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


export default Comparison;