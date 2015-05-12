// Minimum required things
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Thing = require('../models/thing');

router.get('/', function (req, res, next) {
    console.log("things");
    Thing.find(function (err, things) {
        res.json(things);
    });
});

router.post('/', function (req, res, next) {
    var thing = new Thing();
    thing.name.first = "Space";
    thing.name.last = "Ghost";
    console.log(req.body);
    thing.age = req.body.age;
    Thing.create(thing, function (err, post) {
        res.json(post);
    });
});

module.exports = router;
