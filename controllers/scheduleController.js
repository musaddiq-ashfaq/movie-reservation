const Schedule = require('../models/Schedule');
const Movie = require('../models/Movie');

const createSchedule = async(req, res)=>{
    try {
        const {movieId, theaterId, startTime} = req.body;
        const movie = await Movie.findByPk(movieId);
        if(!movie){
            return res.status(404).json({message: "Movie not found"});
        }

        const durationMinutes = parseInt(movie.duration,10);
        const endTime = new Date(new Date(startTime).getTime()+durationMinutes*60000);
        const schedule = await Schedule.create({movieId,theaterId,startTime,endTime});
        return res.status(200).json(schedule);
        
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const getSchedules = async (req, res) => {
    try {
      const schedules = await Schedule.findAll({ include: [Movie] });
      res.status(200).json(schedules);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

module.exports = {createSchedule, getSchedules}