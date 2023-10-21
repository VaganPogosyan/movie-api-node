const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_name, info, rating, description } = req.body;

  // Validations:

  // if (!movie_name) throw "Movie name is required";
  if (!info) throw "Info must be provided";
  if (!rating) throw "Rating must be provided";
  if (rating < 1 || rating > 10) throw "Rating must be between 1 and 10";

  // success!
  const createdMovie = await moviesModel.create({
    movie_name,
    info,
    rating,
    description,
  });
  console.log(createdMovie);

  res.status(200).json({
    status: "success",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
