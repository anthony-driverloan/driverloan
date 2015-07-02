'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhonecallSchema = new Schema({
    callTime: {type:String, required:true, default:'today @ 15.00'},
    userId: {type:Schema.Types.ObjectId},
    vehicleId: {type:Schema.Types.ObjectId},
    loanAmount: {type:Number, required:true},
    manufacturer: {type: String, required:true, lowercase:true, default:'mercedes'},
    model: {type:String, required: true, lowercase:true, default:'c180'}
});

module.exports = mongoose.model('Phonecall', PhonecallSchema);
