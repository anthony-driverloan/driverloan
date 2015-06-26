'use strict';

var _ = require('lodash');
var LoanRequest = require('./loanRequest.model');
//require the Twilio module and create a REST client
var twilio = require('twilio');
var client = new twilio.RestClient('AC571f7c300359c2e642a04fc261f499db', '0f155954632d7f6d2a3386ab46539928');



// Get list of loanRequests
exports.index = function(req, res) {
  LoanRequest.find(function (err, loanRequests) {
    if(err) { return handleError(res, err); }
    return res.json(200, loanRequests);
  });
};

// Get a single loanRequest
exports.show = function(req, res) {
  LoanRequest.findById(req.params.id, function (err, loanRequest) {
    if(err) { return handleError(res, err); }
    if(!loanRequest) { return res.send(404); }
    return res.json(loanRequest);
  });
};

// Creates a new loanRequest in the DB.
exports.create = function(req, res) {
  LoanRequest.create(req.body, function(err, loanRequest) {
    if(err) { return handleError(res, err); }


    var phoneNumber = req.body.phoneNumber;

    console.log(phoneNumber);

    client.messages.create({
    to:phoneNumber,
    from:'+441143031520',
    body:'Your unique sms link to send your loan documents www.driverloan.co.uk/u'
}, function(error, message) {
    if (error) {
        console.log(error.message);
    }
});
    return res.json(201, loanRequest);

  });
};

// Updates an existing loanRequest in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  LoanRequest.findById(req.params.id, function (err, loanRequest) {
    if (err) { return handleError(res, err); }
    if(!loanRequest) { return res.send(404); }
    var updated = _.merge(loanRequest, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, loanRequest);
    });
  });
};

// Deletes a loanRequest from the DB.
exports.destroy = function(req, res) {
  LoanRequest.findById(req.params.id, function (err, loanRequest) {
    if(err) { return handleError(res, err); }
    if(!loanRequest) { return res.send(404); }
    loanRequest.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
