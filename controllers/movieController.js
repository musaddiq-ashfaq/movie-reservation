const Movie = require('../models/Movie');

const createMovie = async (req, res) => {
    try {
        const { title, genre, description, duration, releaseDate } = req.body;
        const movie = await Movie.create({ title, genre, description, duration, releaseDate });
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });

        await movie.update(req.body);
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByPk(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });

        await movie.destroy();
        res.status(200).json({ message: 'Movie deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createMovie, getAllMovies, updateMovie, deleteMovie };