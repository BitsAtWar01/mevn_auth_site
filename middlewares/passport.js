const User = require('../models/user');
const { SECRET } = require('../config');
const { Strategy, ExtractJwt } = require('passport-jwt');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
}

module.exports = (passport) => {
    passport.use(new Strategy(opts, async(payload, done) => {
        await User.findById(payload._id).then(async user => {
            if(user){
                //Morgan or Vincton package for logging
                return done(null, user);
            }
            return done(null, false);
        }).catch((err) => {
            //Morgan or Vincton package for logging
            return done(null, false);
        });
    }))
}