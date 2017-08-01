var express = require('express');
var router = express.Router();
var arrayThing = require('./array');


router.get('/', function (req, res) {
    res.send(arrayThing);
});






module.exports = router;
