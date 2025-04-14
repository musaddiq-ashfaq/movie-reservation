const Seat = require('../models/Seat');
const Theater = require('../models/Theater');

const createSeat = async (req, res) => {
    try {
        const { seatNumber, type, theaterId } = req.body;
        const theater = await Theater.findByPk(theaterId);
        if (!theater) {
            return res.status(404).json({ message: 'Theater not found' });
        }

        const seat = await Seat.create({ seatNumber, type, theaterId });
        res.status(201).json(seat);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSeatsByTheater = async (req, res) => {
    try {
        const { theaterId } = req.params;
        const seats = await Seat.findAll({ where: { theaterId } });
        res.status(200).json(seats);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteSeat = async (req, res) => {
    try {
        const seat = await Seat.findByPk(req.params.id);
        if (!seat) return res.status(404).json({ message: 'Seat not found' });
        await seat.destroy();
        res.status(200).json({ message: 'Seat deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createSeat, getSeatsByTheater, deleteSeat };