const express = require('express');
const { createSchedule, getSchedules } = require('../controllers/scheduleController');
const authenticate = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

const router = express.Router();

router.post('/', authenticate, authorize(['admin']), createSchedule);
router.get('/', getSchedules);

module.exports = router;
