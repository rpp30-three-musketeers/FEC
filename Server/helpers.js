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
  let oneStar = reviews[1] ? (reviews[1] * 1) : 0;
  let twoStar = reviews[2] ? (reviews[2] * 1) : 0;
  let threeStar = reviews[3] ? (reviews[3] * 1) : 0;
  let fourStar = reviews[4] ? (reviews[4] * 1) : 0;
  let fiveStar = reviews[5] ? (reviews[5] * 1) : 0;

  let totalStars = oneStar + twoStar * 2 + threeStar * 3 + fourStar * 4 + fiveStar * 5;
  let totalReviews = oneStar + twoStar + threeStar + fourStar + fiveStar;
  return (totalStars / totalReviews).toFixed(1);

};

const pctRecommend = function(reviews) {
  let totalTrue = reviews[true] ? reviews[true] * 1 : 0;
  let totalFalse = reviews[false] ? reviews[false] * 1 : 0;
  let totalRecommendations = totalTrue + totalFalse;
  return (totalTrue / totalRecommendations).toFixed(1);
};

const totalReviews = function(reviews) {
  let oneStar = reviews[1] ? (reviews[1] * 1) : 0;
  let twoStar = reviews[2] ? (reviews[2] * 1) : 0;
  let threeStar = reviews[3] ? (reviews[3] * 1) : 0;
  let fourStar = reviews[4] ? (reviews[4] * 1) : 0;
  let fiveStar = reviews[5] ? (reviews[5] * 1) : 0;
  let totalReviews = oneStar + twoStar + threeStar + fourStar + fiveStar;
  return (totalReviews);
};

module.exports = {
  starRating,
  pctRecommend,
  totalReviews
};