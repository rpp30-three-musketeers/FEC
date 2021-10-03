import React from 'react';
import ReactDOM from 'react-dom';
import './ReviewForm.css';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: '',
      photos: []

    };
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
    this.dispPhoto = this.dispPhoto.bind(this);
    this.pushBlobUrl = this.pushBlobUrl.bind(this);
  }

  handleSubmitReview(event) {
    event.preventDefault();
    console.log(this.props.productId, '<<<productid');
    let query = {
      // eslint-disable-next-line camelcase
      product_id: 47421,
      rating: 4,
      summary: 'Testing Summary Section',
      body: 'testing',
      recommend: false,
      name: 'username',
      email: 'username@gmail.com',
      photos: this.state.photos,
      characteristics: {}
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
    };

    fetch('/reviews', requestOptions)
      .then((res) => {
        console.log('success');
        this.props.exit();
      })
      .catch(err => console.log(err));
  }

  pushBlobUrl(blobUrl) {
    if (this.state.photos.length < 5) {
      this.setState({ photos: [...this.state.photos, blobUrl] });
    }
  }

  dispPhoto(event) {
    let eLength = event.target.files.length;
    if (eLength === 1) {
      let url = URL.createObjectURL(event.target.files[0]);
      this.pushBlobUrl(url);
    } else {
      let remaining = Math.abs(5 - this.state.photos.length);
      if (eLength >= remaining) {
        for (let i = 0; i < remaining; i++) {
          let url = URL.createObjectURL(event.target.files[i]);
          this.pushBlobUrl(url);
        }
      } else {
        for (let i = 0; i < eLength; i++) {
          let url = URL.createObjectURL(event.target.files[i]);
          this.pushBlobUrl(url);
        }

      }
    }
  }

  render() {
    console.log(this.state);

    return (
      <div id = 'reviewModal'>
        <button id = 'exit' onClick = {this.props.exit}>X</button>
        <h2>Write Your Review</h2>
        <p>About the {this.props.productName}</p>
        <form id = "reviewForm">
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
          <label htmlFor="photo">Photo</label>
          <input accept=".jpg, .jpeg, .png" type="file" id="photo" name="photo" onChange = {this.dispPhoto} multiple/><br/>
          { this.state.photos ? this.state.photos.map((photo, index) => {
            console.log(photo);
            return <img id = {'uploadPhotosReviewForm'} src = {photo} key = {index}/>;
          }) : null} <br/>
          <label htmlFor="Nickname">Nickname:</label><br/>
          <input type="text" id="Nickname" name="Nickname"/><br/>
          <label htmlFor="Email">Email:</label><br/>
          <input type="text" id="Email" name="Email"/><br/>
          <label>For authentication reasons, you will not be emailed</label><br/>
          <br/>
          <button type="submit" onClick = {this.handleSubmitReview}>Submit</button><br/>
        </form>
      </div>
    );
  }
}

export default ReviewForm;