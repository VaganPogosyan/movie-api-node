const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  console.log(req.params);

  const moviesModel = mongoose.model("movies");

  const movie_id = req.params.movie_id;
  try {
    const getMovie = await moviesModel.findOne({
      _id: movie_id,
    });

    if (!getMovie) throw "This movie doesn't exist";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
    return;
  }

  try {
    await moviesModel.deleteOne({
      _id: movie_id,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "Movie deleted successfully",
  });
};
module.exports = deleteMovie;
