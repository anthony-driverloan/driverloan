'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LoanRequestSchema = new Schema({
  loanAmount: {type: Number, required: true},
  loanTerm: {type: Number, required: true},
  monthlyPayments: {type:Number, required: true},
  totalPayment: {type:Number, required:true},
  decision: {type:String, required:true, default: 'processing'},
  userId: {type:Schema.Types.ObjectId, required:true},
});

module.exports = mongoose.model('LoanRequest', LoanRequestSchema);