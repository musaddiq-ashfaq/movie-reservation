const express = require('express');
require('dotenv').config();
const sequelize = require('./db/db.js');

const User = require('./models/User.js');
const Movie = require('./models/Movie.js');
const Theater = require('./models/Theater.js');
const Seat = require('./models/Seat.js');
const Schedule = require('./models/Schedule.js');
const Ticket = require('./models/Ticket.js');

const userRoutes = require('./routes/userRoutes.js');
const theaterRoutes = require('./routes/theaterRoutes.js');
const seatRoutes = require('./routes/seatRoutes');
const movieRoutes = require('./routes/movieRoutes.js');
const scheduleRoutes = require('./routes/scheduleRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

require('./associations.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/theaters',theaterRoutes);
app.use('/seats',seatRoutes);
app.use('/movies',movieRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/tickets', ticketRoutes);

app.get('/', (req, res) => {
    res.send('Movie Reservation System');
});

app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err);
    res.status(500).json({ message: "Internal server error" });
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connected');
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('Models synchronized.');
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
