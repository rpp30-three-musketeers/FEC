import React from 'react';
import ReactDOM from 'react-dom';
import './Reviews.css';
import LeftColumn from './LeftColumn.jsx';
import RightColumn from './RightColumn.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: 'Relevance',
      showReviewModal: false
    };

    this.handleAddReviewClick = this.handleAddReviewClick.bind(this);
    this.handleAddReviewExit = this.handleAddReviewExit.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
  }

  // componentDidMount(){

  // }

  handleAddReviewClick() {
    this.setState({showReviewModal: true});
  }
  handleAddReviewExit() {
    this.setState({showReviewModal: false});
  }
  handleSubmitReview(event) {
    console.log(event.target);
    for (let i = 0; i < event.target.length; i++) {
      console.log(event.target[i].value);
    }

    this.setState({showReviewModal: false});
  }


  render() {
    console.log(this.props, 'review props');
    return (
      <div id={'reviews'}>
        <p>Ratings and Reviews</p>
        <div id={'content'}>
          <div id={'leftColumn'}>
            <LeftColumn rating = {this.props.avg} percentRecommend = {this.props.data.pctRecommend}/>
          </div>
          <div id={'rightColumn'}>
            <RightColumn reviews = {this.props.data.results} reviewCount = {this.props.data.results.length}
              sortedBy = {this.state.sortedBy}/>
            <button id = 'addReview' onClick = {this.handleAddReviewClick}>+ Review</button>
            {this.state.showReviewModal ?
              <div id = 'reviewModal'>
                <button id = 'exit' onClick = {this.handleAddReviewExit}>X</button>
                <h2>Write Your Review</h2>
                <p>About the {this.props.productName}</p>
                <form id = "reviewForm" onSubmit = {this.handleSubmitReview}>
                  <label>Overall Rating:
                    <input type="radio" value = "Poor"/>
                    <input type="radio" value = "Fair"/>
                    <input type="radio" value = "Average"/>
                    <input type="radio" value = "Good"/>
                    <input type="radio" value = "Great"/>
                  </label> <br/>
                  <label> Do You Recommend this Product?: <br/>
                    <input type="radio" value = "Yes"/> Yes<br/>
                    <input type="radio" value = "No"/> No<br/>
                  </label> <br/>
                  <label htmlFor="Summary">Title:</label><br/>
                  <input type="text" id="Summary" name="Summary" maxLength = "60"/><br/>
                  <label htmlFor="Body">Details:</label><br/>
                  <input type="text" id="Body" name="Body" maxLength = "250"/><br/>
                  <label>
                    <input type="button" value = "Upload Photos"/><br/>
                  </label> <br/>
                  <label htmlFor="Nickname">Nickname:</label><br/>
                  <input type="text" id="Nickname" name="Nickname"/><br/>
                  <label htmlFor="Email">Email:</label><br/>
                  <input type="text" id="Email" name="Email"/><br/>
                  <button type="submit">Submit</button><br/>
                </form>
              </div> : null}
          </div>
        </div>

      </div>
    );
  }
}

export default Reviews;