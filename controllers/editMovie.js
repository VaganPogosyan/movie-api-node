const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, info, rating, description } = req.body;

  try {
    if (!movie_id) throw "Movie id is required";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
    return;
  }

  try {
    //   first object is condition to find a specific data
    //   second object is key value pair for objec tin the data
    //   third is configuration
    await moviesModel.updateOne(
      {
        _id: movie_id,
      },
      {
        movie_name,
        rating,
        info,
        description,
      },
      {
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "Movie updated successfully",
  });
};

module.exports = editMovie;
