import React from 'react';
import ReactDOM from 'react-dom';

const LeftColumn = (props) => {

  return (
    <div>
      <div>
        <div>{props.rating}</div>
        <div>stars</div>
      </div>
      <p>{props.percentRecommend + 'of reviews recommend this product'}</p>
      <div>
        <p>5 stars</p>
        <div>percent bar</div>
        <p>4 stars</p>
        <div>percent bar</div>
        <p>3 stars</p>
        <div>percent bar</div>
        <p>2 stars</p>
        <div>percent bar</div>
        <p>1 stars</p>
        <div>percent bar</div>
      </div>
      <div>
        <p>Size</p>
        <div>size marker bar</div>
        <p>Comfort</p>
        <div>size marker bar</div>
      </div>
    </div>
  );
};

export default LeftColumn;