import React from 'react';
import ReactDOM from 'react-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: '',

    };
  }
  render() {

    return (
      <div id = 'reviewModal'>
        <button id = 'exit' onClick = {this.props.exit}>X</button>
        <h2>Write Your Review</h2>
        <p>About the {this.props.productName}</p>
        <form id = "reviewForm" onSubmit = {this.props.submitReview}>
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
      </div>
    );
  }
}

export default ReviewForm;