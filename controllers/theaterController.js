const Theater = require('../models/Theater.js');

const createTheater = async(req, res)=>{
    try {
        const {name, location, totalSeats} = req.body;
        if(!name || !location || !totalSeats){
            return res.status(400).json({message: 'All fields required'});
        }
        const theater = await Theater.create({name, location, totalSeats});
        return res.status(200).json(theater);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const updateTheater = async(req,res)=>{
    try {
        const {name, location, totalSeats} = req.body;
        if(!name || !location || !totalSeats){
            return res.status(400).json({message: 'All fields required'});
        }
        const theater = await Theater.findByPk(req.params.id);
        await theater.update({name, location, totalSeats});
        return res.status(400).json(theater);

    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const getAllTheaters = async(req, res)=>{
    try {
        const theaters = await Theater.findAll();
        return res.status(200).json(theaters);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const deleteTheater = async(req, res)=>{
    try {
        const theater = await Theater.findByPk(req.params.id);
        if(!theater){
            return res.status(404).json({message: "Theater not found"});
        }
        await theater.destroy();
        return res.status(200).json({message: "Theater deleted successfully"});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = {createTheater, updateTheater, getAllTheaters, deleteTheater};