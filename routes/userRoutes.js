const express = require('express');
const router = express.Router();

const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} = require('../controllers/userController');
const authenticate = require('../middlewares/auth');

router.post('/',createUser);
// router.get('/',authenticate ,getAllUsers);
router.get('/:id',authenticate,getUserById);
router.put('/:id',authenticate, updateUser);
router.delete('/:id',authenticate, deleteUser);
router.post('/login', loginUser);

module.exports = router;