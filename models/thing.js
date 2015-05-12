var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        first: {type: String, required: true},
        last: String
    },
    occupation: String,
    binary: Buffer,
    living: Boolean,
    updated: {type: Date, default: Date.now},
    age: {type: Number, default: 18, min: 18, max: 65},
    mixed: mongoose.Schema.Types.Mixed,
    array: [],
    ofStrings: [String],
    ofNumbers: [Number],
    ofDates: [Date],
    ofBuffers: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [mongoose.Schema.Types.Mixed],
    ofObjectIds: [mongoose.Schema.Types.ObjectId],
    nested: {
        stuff: String,
        mixedStuff: mongoose.Schema.Types.Mixed
    }
});

module.exports = mongoose.model('thing', schema);