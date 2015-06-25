'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VehicleSchema = new Schema({
  registration: {type:String, required:true, uppercase:true},
  mileage: {type:Number, required: true},
  value: {type:Number, required: true, default:2000},
  manufacturer: {type: String, required:true, lowercase:true, default:'mercedes'},
  model: {type:String, required: true, lowercase:true, default:'c180'},
  engine: {type:String, required: true, lowercase:true, default:'1998cc'},
  colour: {type: String, required: true, lowercase:true, default:'blue'},
  vin: {type:String, required: true, uppercase:true, default:'ABCDEF1234567'},
  documentReference: {type: String, required: true, default:'ABCDEF1234567'},
  userId: {type:Schema.Types.ObjectId},
  bodyType: {type: String, required: true, default:'saloon'}
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
