const User = require('./models/User');
const Movie = require('./models/Movie');
const Theater = require('./models/Theater');
const Seat = require('./models/Seat');
const Schedule = require('./models/Schedule');
const Ticket = require('./models/Ticket');

Movie.hasMany(Schedule, { foreignKey: 'movieId' });
Schedule.belongsTo(Movie, { foreignKey: 'movieId' });

Theater.hasMany(Schedule, { foreignKey: 'theaterId' });
Schedule.belongsTo(Theater, { foreignKey: 'theaterId' });


Schedule.hasMany(Ticket, { foreignKey: 'scheduleId' });
Ticket.belongsTo(Schedule, { foreignKey: 'scheduleId' });

User.hasMany(Ticket, { foreignKey: 'userId' });
Ticket.belongsTo(User, { foreignKey: 'userId' });

Seat.hasMany(Ticket, { foreignKey: 'seatId' });
Ticket.belongsTo(Seat, { foreignKey: 'seatId' });

Theater.hasMany(Seat, { foreignKey: 'theaterId' });
Seat.belongsTo(Theater, { foreignKey: 'theaterId' });

module.exports = {
  User,
  Movie,
  Theater,
  Seat,
  Schedule,
  Ticket
};
