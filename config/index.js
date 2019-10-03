// const config = require('../config/index');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const user = {
    username : 'test',
    password : 'test'
}

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username, password, cb) => {
        if(username === user.username && password === user.password) return cb(null, user);
        else return cb(null, false)
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromHeader('token'),
        secretOrKey : 'delivery'
    },
    (jwtPayload, cb) => {
        console.log(jwtPayload,'11')
        cb(null, user)
        // return userService.byId(jwtPayload.id)
        //     .then(user => {
        //         return cb(null, user);
        //     })
        //     .catch(err => {
        //         return cb(err);
        //     });
    }
));

// passport.use(new GoogleStrategy({
//         clientID: config.passport.google.clientID,
//         clientSecret: config.passport.google.clientSecret,
//         callbackURL: `${config.frontHost}/${config.passport.google.callbackURL}`
//     },
//     (token, tokenSecret, profile, cb) => {
//         let params = {
//             googleId: profile.id,
//             name: `${profile.name.givenName} ${profile.name.familyName}`,
//             email: profile.emails[0].value
//         };
//         return authService.loginGoogle(params)
//             .then(user => {
//                 cb(null, user);
//             })
//             .catch(err => {
//                 return cb(err)
//             });

//     }
// ));

// passport.use(new FacebookStrategy({
//         clientID: config.passport.facebook.clientID,
//         clientSecret: config.passport.facebook.clientSecret,
//         callbackURL: `${config.frontHost}/${config.passport.facebook.callbackURL}`,
//         profileFields: ['id', 'emails', 'displayName']

//     },
//     (token, tokenSecret, profile, done) => {
//         let params = {
//             facebookId: profile.id,
//             name:profile.displayName,
//             email: profile.emails[0].value
//         };
//         return authService.loginFacebook(params)
//             .then(user => {
//                 return done(null, user);
//             })

//     }
// ));
