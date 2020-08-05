const User = require('../models/user');
const Request = require('../models/request');
const { compare, genSalt, hash } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/index');
const { body, validationResult } = require('express-validator');
const passport = require('passport');

//Server Side Validation
const validators = {
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
            const role = req.path.slice(7);
            return User.findOne({username: req.body.username}).then(user => {
                if(!user){
                    return Promise.reject('Woops! Username not Found.');
                } else if (user.role !== role){
                    return Promise.reject('Please make sure you\'re logging in from the right portal.');
                }else {
                    return compare(value, user.password).then(isMatch => {
                        if(!isMatch){
                            return Promise.reject('Yikes! Incorrect Password');
                        }
                    })
                }
            })
        })
    ],


    request: [
        body('email')
            .isEmail()
            .withMessage('Hey! Your Email ID must be in proper email format')
            .custom((value) => {
                return User.findOne({email: value}).then(user => {
                    if(user){
                        return Promise.reject('Yikes! Email is already registered. Did you forget your password?');
                    }
                })
            })
            .custom((value) => {
                return Request.findOne({email: value}).then(user => {
                    if(user){
                        return Promise.reject('Yikes! You\'ve already requested with this email. We\'ll get to you soon!');
                    }
                })
            }),

        body('username')
            .trim()
            .custom((value) => {
                return User.findOne({username: value}).then(user => {
                    if(user){
                        return Promise.reject('Oops! You\'ve already requested with this username. We\'ll get to you soon!');
                    }
                })
            })
            .custom((value) => {
                return Request.findOne({username: value}).then(user => {
                    if(user){
                        return Promise.reject('Oops! Username is already taken.');
                    }
                })
            }),

        body('reason')
            .not().isEmpty()
            .withMessage('Come on! Your reason is required')
    ]
}

/**
 * @DESC To register the user (ADMIN, SUPER_ADMIN, USER)
 */
const userRegister = async (req, res, role) => {
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
        role
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

/**
 * @DESC To login the user (ADMIN, SUPER_ADMIN, USER)
 */
const userLogin = async (req, res, role) => {
    //Validation Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            errors: errors.array() 
        });
    }
    //Password is correct and user can Login
    const user = await User.findOne({username: req.body.username})

    const payload = {
        _id: user._id,
        username: user.username,
        name: user.name,
        email: user.email
    }
    jwt.sign(payload, SECRET, {
        expiresIn: "7 days"
    }, (err, token) => {
        res.status(200).json({
            success: true,
            token: `Bearer ${token}`,
            user: user,
            msg: "Yay! You are now Loggeg in."
        })
    });

}

/**
 * @DESC To log request from the user (ADMIN, SUPER_ADMIN)
 */
const userRequest = (req, res) => {
    //Validation Errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            errors: errors.array() 
        });
    }
    Request.create(req.body).then(request => {
        return res.status(201).json({
            success: true,
            msg: "Yay! Your request has now been recorded."
        });
    }).catch(err => {
        console.log(err);
    })
}

/**
 * @DESC Passport middleware
 */

const userAuth = passport.authenticate('jwt', {session: false});

/**
 * 
 * @DESC Check the Role Middleware
 */

const checkRole = roles => (req, res, next) => !roles.includes(req.user.role) ? res.status(401).json("Unauthorized") : next();

const serializeUser = user => {
    return {
        username: user.username,
        email: user.email,
        name: user.name,
        _id: user._id,
        updatedAt: user._id,
        createdAt: user.createdAt
    }
}

module.exports = {
    validators,
    userLogin,
    userRegister,
    serializeUser,
    checkRole,
    userAuth,
    userRequest
}