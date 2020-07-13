const express = require('express');
const router = express.Router();
const passport = require('passport');
const authenticate = require('../../config/passport')
//User Controller
const userController = require('../../controllers/users');

//PUBLIC ROUTES
/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post('/register', userController.validators['register'], userController.createUser)

/**
 * @route POST api/users/login
 * @desc Login the user
 * @access Public
 */
router.post('/login', userController.validators['login'], userController.loginUser)

//PRIVATE ROUTES
/**
 * @route GET api/users/profile
 * @desc Display the User's Profile
 * @access Private
 */
router.get('/profile', authenticate.verifyUser, userController.getUser)

/**
 * @route DELETE api/users/delete
 * @desc Delete Single User
 * @access Private
 */
router.delete('/delete', authenticate.verifyUser, userController.deleteUserPrivate)


//ADMIN ROUTES

/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post('/admin/register', userController.validators['register'], userController.createAdmin)

/**
 * @route GET api/users/
 * @desc Display All Users
 * @access Admin
 */
router.get('/',authenticate.verifyUser, authenticate.verifyAdmin, userController.getUsers)

/**
 * @route DELETE api/users/delete
 * @desc Delete Single Users
 * @access Admin
 */
router.delete('/:user_id',authenticate.verifyUser, authenticate.verifyAdmin, userController.deleteUserAdmin)

/**
 * @route DELETE api/users/
 * @desc Delete All Users
 * @access Admin
 */
router.delete('/',authenticate.verifyUser, authenticate.verifyAdmin, userController.deleteUsers)

module.exports = router;