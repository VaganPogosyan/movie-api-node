const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  try {
    const moviesData = await moviesModel.findOne({
      _id: req.params.movie_id,
    });

    res.status(200).json({
      status: "success",
      data: moviesData,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
    return;
  }
};

module.exports = getSingleMovie;
