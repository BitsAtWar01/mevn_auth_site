const express = require('express');
const router = express.Router();

/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post('/register', (req,res) => {
    res.send('REGISTER ROUTE UNDER CONSTRUCTION');
})

/**
 * @route POST api/users/login
 * @desc Login the user
 * @access Public
 */
router.post('/login', (req, res) => {
    res.send('LOGIN ROUTE UNDER CONSTRUCTION')
})

/**
 * @route POST api/users/profile
 * @desc Display the User's Data
 * @access Private
 */
router.get('/profile', (req, res) => {
    res.send('PROFILE ROUTE UNDER CONSTRUCTION')
})

module.exports = router;