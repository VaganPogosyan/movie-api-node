const mongoose = require("mongoose");

const getAllMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  try {
    const moviesData = await moviesModel.find({});

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

module.exports = getAllMovies;
