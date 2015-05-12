var mongoose = require('mongoose');

var scheme = new mongoose.Scheme({
    name: String,
    occupation: String,
    binary: Buffer,
    living: Boolean,
    updated: Date,
    age: Number,
    mixed: mongoose.Schema.Types.Mixed,


});