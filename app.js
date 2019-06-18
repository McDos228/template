const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', async(req, res, next)=> res.json(await gitSerive.getUser()))

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        errors: err.errors
    });
});

module.exports = app;