const movieRecommendation = (req, res) => {
  res.status(200).json({
    status: "get openai movie recommendation",
  });
};

module.exports = movieRecommendation;
