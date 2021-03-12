const express = require("express");
const router = express.Router();

//require Movie collection
const Movie = require("../models/Movie.model");

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
      .then((movie) => {
        console.log(req.params.id);
      res.render("movie", { movie });
    })
    .catch((error) =>
      console.log("Error while getting the movie from the DB: ", error)
    );
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      console.log(allMovies);
      res.render("movies", { movies: allMovies });
    })
    .catch((error) =>
      console.log("Error while getting the movies from the DB: ", error)
    );
});

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
