const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async(req, res)=>{
    try {
        const {username, fullName, email, password} = req.body;
        const alreadyExist = await User.findOne({where: {username}});
        if(alreadyExist){
            res.status(400).json({ message: 'User already taken, try another username'});
        }
        const user = await User.create({username, fullName, email, password, role: 'user'});
        
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: '2d'
        });

        const {password: _, ...userData} = user.toJSON();
    
        res.status(201).json({ message: 'User created successfully', user: userData, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllUsers = async(req, res)=>{
    try {
        const users = await User.findAll({attributes: {exclude: ['password']}});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUserById = async(req,res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            res.status(404).json({message: "User not found"});
        }
        const {password, ...userData} = user.toJSON();
        res.status(200).json(userData);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { username, fullName, email, password } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.update({ username, fullName, email, password });
        const {password: _, ...updatedUser} = user;
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteUser = async(req, res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await user.destroy();
        res.status(200).json({message: "User deleted"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const loginUser = async(req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user){
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
            expiresIn: '2d'
        });

        const { password: _, ...userData } = user.toJSON();
        res.status(200).json({message: 'Login successful', user: userData,token});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser};