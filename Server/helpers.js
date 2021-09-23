const starRating = function(reviews) {
// may need to test if there are no reviews, will it be undefined or empty arr?

  let totalStars = 0;

  if (reviews.length === 0) {
    return 0;
  }

  for (var i = 0; i < reviews.length; i++) {
    totalStars = reviews[i].rating + totalStars;
  }

  return (totalStars / reviews.length);
};

const pctRecommend = function(reviews) {
  // may need to test if there are no reviews, will it be undefined or empty arr?

  let totalRecommendations = 0;

  if (reviews.length === 0) {
    return 0;
  }
  // console.log(reviews, '<<<<<<<reviews');
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i].recommend) {
      totalRecommendations++;
    }
  }
  if (totalRecommendations === 0) {
    return totalRecommendations;
  } else {
    return (totalRecommendations / reviews.length);
  }
};

module.exports = {
  starRating,
  pctRecommend
};