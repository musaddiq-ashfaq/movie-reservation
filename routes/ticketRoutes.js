const express = require('express');
const { bookTicket, getUserTickets, cancelTicket } = require('../controllers/ticketController');
const authenticate = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticate, bookTicket);
router.get('/', authenticate, getUserTickets);
router.delete('/:id', authenticate, cancelTicket);

module.exports = router;
