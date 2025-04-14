const express = require('express');
const { createTheater, getAllTheaters, updateTheater, deleteTheater } = require('../controllers/theaterController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.post('/create', authenticate, authorize(['admin']), createTheater);
router.get('/', authenticate, getAllTheaters);
router.put('/update/:id', authenticate, authorize(['admin']), updateTheater);
router.delete('/delete/:id', authenticate, authorize(['admin']), deleteTheater);

module.exports = router;