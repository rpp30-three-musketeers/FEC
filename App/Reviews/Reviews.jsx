import React from 'react';
import ReactDOM from 'react-dom';
import './Reviews.css';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';
import $ from 'jquery';
import ProductIdContext from '../context.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.context,
      sortedBy: 'relevant',
      productReviews: 'needToInitialize',
      averageRating: null,
      productName: '',
      meta: {},
      showPicModal: false,
      showReviewModal: false


    };

    this.reviewApiCall = this.reviewApiCall.bind(this);
    this.numberToPercent = this.numberToPercent.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  static contextType = ProductIdContext;

  componentDidMount() {

    let options = {
      // eslint-disable-next-line camelcase
      product_id: this.context
    };
    $.get('/products', options, (data) => {
      this.reviewApiCall(options, data.name);
    });

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.productId !== this.state.productId) {
      let options = {
        // eslint-disable-next-line camelcase
        product_id: this.context
      };
      $.get('/products', options, (data) => {
        this.reviewApiCall(options, data.name);
      });
    }
  }

  handleSortByChange(newSortByFilter) {
    let options = {
      product_id: this.context,
      sort: newSortByFilter
    }
    this.reviewApiCall(options, null, true);

  }

  reviewApiCall(parameters, pName, bypassMeta) {

    $.get('/reviews/', parameters, (data) => {
      return data;
    // eslint-disable-next-line semi
    }).then((info)=> {
      if(bypassMeta) {
        this.setState({productReviews:info});
      } else {
        $.get('/reviews/meta', parameters, (metaData) => {
          return metaData
        }).then((mData) =>{
          if(pName) {
            this.setState({productId: parseInt(info.product), productReviews: info, productName: pName, meta: mData});
          } else {
            this.setState({productId: parseInt(info.product), productReviews: info, meta: mData});
          }
        }).catch((err) =>{
          console.log(err);
          return null;
        })
      }

    }).catch((err) =>{
      console.log(err);
      return null;
    });
  }

  numberToPercent(num) {
    if (num === 0) {
      return '0%';
    } else {
      return (num * 100).toString() + '%';
    }
  }


  render() {
    let renderReviews = this.state.productReviews === 'needToInitialize' ? false : true;
    let pct = this.numberToPercent(this.state.meta.pctRecommend);

    return (
      <div>
      {renderReviews ?
        <div id={'reviews'}>
          <p>Ratings and Reviews</p>
          <div id={'content'}>
            <div id={'leftColumn'}>
              <LeftColumn avgRating = {this.state.meta.averageRating} percentRecommend = {pct} pId = {this.state.productId}
                reviewCount = {this.state.meta.totalReviews} chars = {this.state.meta.characteristics}
                ratings = {this.state.meta.ratings} numToPct = {this.numberToPercent}/>
            </div>
            <div id={'rightColumn'}>
              <RightColumn reviews = {this.state.productReviews.results} reviewCount = {this.state.meta.totalReviews}
                sortedBy = {this.handleSortByChange} productName = {this.state.productName}
                characteristics = {this.state.meta.characteristics}/>
            </div>
          </div>
        </div> : null}

        </div>
    );
  }
}

export default Reviews;