'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VehicleSchema = new Schema({
  registration: {type:String, required:true, uppercase:true},
  mileage: {type:Number, required: true},
  // value: {type:Number, required: true},
  // manufacturer: {type: String, required:true, lowercase:true},
  // model: {type:String, required: true, lowercase:true},
  // engine: {type:String, required: true, lowercase:true},
  // colour: {type: String, required: true, lowercase:true},
  // vin: {type:String, required: true, uppercase:true},
  // documentReference: {type: String, required: true},
  userId: {type:Schema.Types.ObjectId, required:true}
  // bodyType: {type: String, required: true}
});

module.exports = mongoose.model('Vehicle', VehicleSchema);