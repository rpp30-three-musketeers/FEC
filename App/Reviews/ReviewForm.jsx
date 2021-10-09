import React from 'react';
import ReactDOM from 'react-dom';
import './ReviewForm.css';
import ProductIdContext from '../context.jsx';
import FullStar from '../StarRatings/icons/FullStar.jsx';
import EmptyStar from '../StarRatings/icons/EmptyStar.jsx';
import $ from 'jquery';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: '',
      photos: [],
      stars: [0,0,0,0,0]

    };
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
    this.dispPhoto = this.dispPhoto.bind(this);
    this.pushBlobUrl = this.pushBlobUrl.bind(this);
    this.blobURLParser = this.blobURLParser.bind(this);
    this.handleClickStar = this.handleClickStar.bind(this);
  }
  static contextType = ProductIdContext;

  handleSubmitReview(event) {

    event.preventDefault();
    let productId = this.context();
    let recommend = event.target.recommend.value === "Yes" ? true : false;
    let charMap = {};
    for(let characteristic in this.props.characteristics) {
      charMap[this.props.characteristics[characteristic].id] = parseInt(event.target[characteristic].value);
    }
    console.log(charMap);
    let rating = 0;
    for(let i = 0; i <this.state.stars.length; i++){
      if(this.state.stars[i] === 1) {
        rating++;
      }
    }

    let query = {
      // eslint-disable-next-line camelcase
      product_id: productId,
      rating: rating,
      summary: event.target.summary.value,
      body: event.target.body.value,
      recommend: recommend,
      name: event.target.nickname.value,
      email: event.target.email.value,
      photos: this.state.photos,
      characteristics: charMap
    };
    console.log(query);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
    };

    fetch('/reviews', requestOptions)
      .then(() => {
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

  blobURLParser(){
    let urls = [];
    for (let i = 0; i < this.state.photos.length; i++) {
      urls.push(this.state.photos[i].slice(5));
    }
    console.log(urls);
    return urls;
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

  handleClickStar(index) {
    if(index === 0) {
      this.setState({stars: [1,0,0,0,0]})
    } else if (index === 1) {
      this.setState({stars: [1,1,0,0,0]})
    }
    else if (index === 2) {
      this.setState({stars: [1,1,1,0,0]})
    }
    else if (index === 3) {
      this.setState({stars: [1,1,1,1,0]})
    }
    else if (index === 4) {
      this.setState({stars: [1,1,1,1,1]})
    }
  }

  render() {
    console.log(this.props, 'reviewForm props');

    return (
      <div id = {'reviewContainer'}>
        <div id = 'reviewModal'>
          <div id = {'reviewContent'}>
            <button id = 'exit' onClick = {this.props.exit}>X</button>
            <h1>Write Your Review</h1>
            <h3>About the {this.props.productName}</h3>
            <form id = "reviewForm" onSubmit = {this.handleSubmitReview}>
              <label>Overall Rating:
                  <span onClick = {() => {
                    this.handleClickStar(0);
                  }} >{this.state.stars[0] ? <FullStar/> : <EmptyStar/>}</span>
                  <span onClick = {() => {
                    this.handleClickStar(1);
                  }}>{this.state.stars[1] ? <FullStar/> : <EmptyStar/>}</span>
                  <span onClick = {() => {
                    this.handleClickStar(2);
                  }}>{this.state.stars[2] ? <FullStar/> : <EmptyStar/>}</span>
                  <span onClick = {() => {
                    this.handleClickStar(3);
                  }}>{this.state.stars[3] ? <FullStar/> : <EmptyStar/>}</span>
                  <span onClick = {() => {
                    this.handleClickStar(4);
                  }}>{this.state.stars[4] ? <FullStar/> : <EmptyStar/>}</span>
              </label> <br/>
              <label className = {'flexLabel'}> Do You Recommend this Product?:
                <input type="radio" value = "Yes" name = "recommend"/> Yes
                <input type="radio" value = "No" name = "recommend"/> No
              </label> <br/>

              {Object.keys(this.props.characteristics).map((key, index)=>{
                let one, two, three, four, five;
                if(key === 'Size') {
                  one = 'A size too small';
                  two = '½ a size too small';
                  three = 'Perfect';
                  four = '½ a size too big';
                  five = 'A size too wide';
                } else if(key === 'Width') {
                  one = 'Too narrow';
                  two = 'Slightly narrow';
                  three = 'Perfect';
                  four = 'Slightly wide';
                  five = 'Too wide';
                } else if(key === 'Comfort') {
                  one = 'Uncomfortable';
                  two = 'Slightly uncomfortable';
                  three = 'Ok';
                  four = 'Comfortable';
                  five = 'Perfect';
                } else if(key === 'Quality') {
                  one = 'Poor';
                  two = 'Below average';
                  three = 'What I expected';
                  four = 'Pretty great';
                  five = 'Perfect';
                } else if(key === 'Length') {
                  one = 'Runs Short';
                  two = 'Runs slightly short';
                  three = 'Perfect';
                  four = 'Runs slightly long';
                  five = 'Runs long';
                } else if(key === 'Fit') {
                  one = 'Runs tight';
                  two = 'Runs slightly tight';
                  three = 'Perfect';
                  four = 'Runs slightly long';
                  five = 'Runs long';
                }
                return (
                  <>
                    <label id = {'characteristic'}> {key} <br/>
                      <label>
                        <input type="radio" value = "1" name = {key} id = {'bubble'}/>
                        {one}
                      </label> <br/>
                      <label>
                        <input type="radio" value = "2" name = {key} id = {'bubble'}/>
                        {two}
                      </label><br/>
                      <label>
                        <input type="radio" value = "3" name = {key} id = {'bubble'}/>
                        {three}
                      </label><br/>
                      <label>
                        <input type="radio" value = "4" name = {key} id = {'bubble'}/>
                        {four}
                      </label><br/>
                      <label>
                        <input type="radio" value = "5" name = {key} id = {'bubble'}/>
                        {five}
                      </label><br/>
                    </label>
                    <div id = {'seperator'}></div>
                  </>
                );
              })}

              <label htmlFor="Summary">Title:</label> <br/>
              <input type="text" id="Summary" name="summary" maxLength = "60"/><br/>
              <label htmlFor="Body">Details:</label> <br/>
              <textarea id="Body" name="body" maxLength = "250"/><br/>
              <label htmlFor="photo">Photo</label>
              <input accept=".jpg, .jpeg, .png" type="file" id="fileSelector" name="photo" onChange = {this.dispPhoto} multiple/><br/>
              { this.state.photos ? this.state.photos.map((photo, index) => {
                console.log(photo);
                return <img id = {'uploadPhotosReviewForm'} src = {photo} key = {index}/>;
              }) : null} <br/>
              <label htmlFor="Nickname">Nickname:</label>
              <input type="text" id="Nickname" name="nickname"/><br/>
              <label htmlFor="Email">Email:</label>
              <input type="text" id="Email" name="email"/><br/>
              <label>For authentication reasons, you will not be emailed</label><br/>
              <button type="submit" id = {'submitButton'}>Submit</button><br/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewForm;