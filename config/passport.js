const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const { SECRET } = require('../config/index');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET;

exports.jwtPassport = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload._id)
        .then(user => {
            if(user) return done(null, user)
            return done(null, false)
        }). catch(err => {
            console.log(err)
        })
    })
)
    
exports.verifyUser = passport.authenticate('jwt', {session: false});
exports.verifyAdmin = function(req, res, next){
    if(!req.user.admin){
        err = new Error('You are not authorized to perform this operation!')
        err.status = 403;
        return next(err);
    }
    next();
}   