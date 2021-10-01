const starRating = function(reviews) {
// may need to test if there are no reviews, will it be undefined or empty arr?

  // let totalStars = 0;

  // if (reviews.length === 0) {
  //   return 0;
  // }

  // for (var i = 0; i < reviews.length; i++) {
  //   totalStars = reviews[i].rating + totalStars;
  // }

  // return (totalStars / reviews.length);

  let totalStars = reviews[1] * 1 + reviews[2] * 2 + reviews[3] * 3 + reviews[4] * 4 + reviews[5] * 5;
  let totalReviews = reviews[1] * 1 + reviews[2] * 1 + reviews[3] * 1 + reviews[4] * 1 + reviews[5] * 1;
  return (totalStars / totalReviews).toFixed(2);

};

const pctRecommend = function(reviews) {
  let totalTrue = reviews[true];
  let totalRecommendations = reviews[false] * 1 + reviews[true] * 1;
  return (totalTrue / totalRecommendations).toFixed(2);
};

const totalReviews = function(reviews) {
  let totalReviews = reviews[1] * 1 + reviews[2] * 1 + reviews[3] * 1 + reviews[4] * 1 + reviews[5] * 1;
  return (totalReviews);
};

module.exports = {
  starRating,
  pctRecommend,
  totalReviews
};