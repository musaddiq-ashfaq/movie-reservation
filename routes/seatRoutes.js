const express = require('express');
const { createSeat, getSeatsByTheater, deleteSeat } = require('../controllers/seatController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.post('/create', authenticate, authorize(['admin']),createSeat);
router.get('/theater/:theaterId', getSeatsByTheater);
router.delete('/delete/:id', authenticate, authorize(['admin']), deleteSeat);

module.exports = router;
