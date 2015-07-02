'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AccountSchema = new Schema({
  accountNo: {type:String, required:true, default:'ABC123456'},
  loanAmount: {type:Number, required:true, default:1000},
  loanTerm: {type:Number, required:true, default:12},
  regNo: {type:String, required:true, default:'av02azj'},
  manufacturer: {type:String, required:true, default:'mercedes'},
  model: {type:String, required:true, default:'c180 avantgarde auto'},
  loanStatus: {type:String, required:true, default:'active'},
  balance:{type:Number, required:true},
  statements:[{
    date: {type:String},
    description:{type:String},
    amount:{type:Number},
    balance:{type:Number}
  }]

});

module.exports = mongoose.model('Account', AccountSchema);
