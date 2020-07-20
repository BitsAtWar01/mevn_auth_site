const User = require('../models/user');
const { compare, genSalt, hash } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/index');
const { body, validationResult } = require('express-validator');

//Server Side Validation
exports.validators = {
    register: [

        body('email')
            .isEmail()
            .withMessage('Hey! Your Email ID must be in proper email format')
            .custom((value) => {
                return User.findOne({email: value}).then(user => {
                    if(user){
                        return Promise.reject('Yikes! Email is already registered. Did you forget your password?');
                    }
                })
            }),

        body('username')
            .trim()
            .custom((value) => {
                return User.findOne({username: value}).then(user => {
                    if(user){
                        return Promise.reject('Oops! Username is already taken.');
                    }
                })
            }),

        body('password')
            .isLength({min: 8})
            .withMessage('Nah! Password must be at least 8 chars long')
            .matches(/\d/)
            .withMessage('Uh Oh! Password must contain a number'),

        body('confirm_password')
            .custom((value, { req }) => {
                if(value !== req.body.password){
                    return Promise.reject('Yikes! Password doesn\'t match.');
                }
                return true;
            })

    ],

    login: [

        body('password')
        .isLength({min: 8})
        .withMessage('No No! Password must be at least 8 chars long')
        .matches(/\d/)
        .withMessage('Uh Oh! Password must contain a number')
        .custom((value, { req }) => {
            return User.findOne({username: req.body.username}).then(user => {
                if(!user){
                    return Promise.reject('Woops! Username not Found.');
                } else {
                    return compare(value, user.password).then(isMatch => {
                        if(!isMatch){
                            return Promise.reject('Yikes! Incorrect Password');
                        }
                    })
                }
            })
        })

    ]
}

//PUBLIC CONTROLLERS
//Create User Controller
exports.createUser = (req,res, next) => {
    //Validation Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            errors: errors.array() 
        });
    }

    // The data is valid & now we can Register the User
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    //Hash the password after generating a salt
    genSalt(10, (err, salt) => {
        hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            else newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Yay! User is now registered."
                });
            }).catch(err => {
                console.log(err);
            })
        })
    })
}

//Login User Controller
exports.loginUser = (req, res, next) => {
    //Validation Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            errors: errors.array() 
        });
    }
    //Password is correct and user can Login
    User.findOne({username: req.body.username})
    .then(user => {
        const payload = {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email
        }
        jwt.sign(payload, SECRET, {
            expiresIn: 604800
        }, (err, token) => {
            res.status(200).json({
                success: true,
                token: `Bearer ${token}`,
                user: user,
                msg: "Yay! You are now Loggeg in."
            })
        });
    }, (err) => next(err))
    .catch(err => next(err));
}

//PRIVATE CONTROLLERS
//Get Profile of User Controller
exports.getUser = (req, res, next) => {
    //Send User
    return res.json({
        user: req.user
    })
}

//Delete user private Controller
exports.deleteUserPrivate = (req, res, next) => {
    User.deleteOne({_id: req.user._id}).then(resp => {
        res.status(200).json(resp)
    }, err => next(err))
    .catch(err => next(err));
}

//ADMIN CONTROLLERS
//Create Admin Account
exports.createAdmin = (req,res, next) => {
    //Validation Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            errors: errors.array() 
        });
    }

    // The data is valid & now we can Register the User
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        admin: req.body.admin
    })
    //Hash the password after generating a salt
    genSalt(10, (err, salt) => {
        hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            else newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Yay! User is now registered."
                });
            }).catch(err => {
                console.log(err);
            })
        })
    })
}

exports.getUsers = (req, res, next) => {
    User.find({}).then(users => {
        res.status(200).json(users);
    }, err => next(err))
    .catch(err => next(err));
}

//Delete user admin controller
exports.deleteUserAdmin = (req, res, next) => {
    User.deleteOne({_id: req.params.user_id}).then(resp => {
        res.status(200).json(resp)
    }, err => next(err))
    .catch(err => next(err));
}

//Delete all Users Controller
exports.deleteUsers = (req, res, next) => {
    User.deleteMany({}).then(resp => {
        res.status(200).json(resp)
    }, err => next(err))
    .catch(err => next(err));
}