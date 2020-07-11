const express = require('express');
const router = express.Router();
const passport = require('passport');
//User Controller
const userController = require('../../controllers/users');

/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post('/register', userController.validators['register'], userController.createUser);

/**
 * @route POST api/users/login
 * @desc Login the user
 * @access Public
 */
router.post('/login', userController.validators['login'], userController.loginUser);

/**
 * @route POST api/users/profile
 * @desc Display the User's Data
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), userController.getUser)

module.exports = router;