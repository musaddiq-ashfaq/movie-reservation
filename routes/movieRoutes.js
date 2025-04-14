const express = require('express');
const { createMovie, getAllMovies, updateMovie, deleteMovie } = require('../controllers/movieController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.post('/', authenticate, authorize(['admin']), createMovie);
router.get('/', getAllMovies);
router.put('/:id', authenticate, authorize(['admin']), updateMovie);
router.delete('/:id', authenticate, authorize(['admin']), deleteMovie);

module.exports = router;