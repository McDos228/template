const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');
const config = require('./config');
const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/test", passport.authenticate('local', {session: false}), (req, res)=>{
  res.json(req.user)
})

app.post("/testjwt/", passport.authenticate('jwt', {session: false}), (req, res)=>{
  res.json(req.user)
})

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        errors: err.errors
    });
});

module.exports = app;