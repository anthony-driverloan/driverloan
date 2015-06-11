'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LoanRequestSchema = new Schema({
  loanAmount: {type: Number, required: true},
  loanTerm: {type: String, required: true},
  loanPurpose: {type: String, required: true},
  monthlyPayments: {type:Number, required: true, default:163.34},
  totalPayment: {type:Number, required:true, default:2000},
  decision: {type:String, required:true, default: 'processing'},
  // userId: {type:Schema.Types.ObjectId, required:true}
});

module.exports = mongoose.model('LoanRequest', LoanRequestSchema);