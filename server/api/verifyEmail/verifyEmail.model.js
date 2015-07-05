'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VerifyEmailSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('VerifyEmail', VerifyEmailSchema);