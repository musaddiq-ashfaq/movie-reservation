const Ticket = require('../models/Ticket');
const Schedule = require('../models/Schedule');
const Seat = require('../models/Seat');

const bookTicket = async(req, res)=>{
    try {
        const {scheduleId, seatId, price} = req.body;
        const userId = req.user.id;

        const schedule = await Schedule.findByPk(scheduleId);
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });

        const seat = await Seat.findByPk(seatId);
        if (!seat) return res.status(404).json({ message: 'Seat not found' });

        if (seat.theaterId !== schedule.theaterId) {
            return res.status(400).json({ message: 'Seat does not belong to the schedule theater' });
        }

        const existing = await Ticket.findOne({where: scheduleId, seatId});
        if (existing) {
            return res.status(400).json({ message: 'Seat already booked' });
        }

        const ticket = await Ticket.create({scheduleId,seatId,userId,price: price || 300});
        return res.status(201).json(ticket);
    } catch (error) {
        return res.status(500).json({ error: err.message });
    }
}

const getUserTickets = async (req, res) => {
    try {
      const userId = req.user.id;
      const tickets = await Ticket.findAll({
        where: { userId },
        include: ['Schedule', 'Seat']
      });
      res.status(200).json(tickets);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

const cancelTicket = async (req, res) => {
    try {
      const userId = req.user.id;
      const ticketId = req.params.id;
  
      const ticket = await Ticket.findOne({ where: { id: ticketId, userId } });
      if (!ticket) return res.status(404).json({ message: 'Ticket not found or unauthorized' });
  
      await ticket.destroy();
      res.status(200).json({ message: 'Ticket cancelled successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

module.exports = {bookTicket, getUserTickets,cancelTicket}