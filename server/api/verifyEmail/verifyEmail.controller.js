'use strict';

var _ = require('lodash');
var VerifyEmail = require('./verifyEmail.model');

// Get list of verifyEmails
exports.index = function(req, res) {
  VerifyEmail.find(function (err, verifyEmails) {
    if(err) { return handleError(res, err); }
    return res.json(200, verifyEmails);
  });
};

// Get a single verifyEmail
exports.show = function(req, res) {

  var userId = req.params.id;

  res.send(200, 'verified');

};

// Creates a new verifyEmail in the DB.
exports.create = function(req, res) {
  VerifyEmail.create(req.body, function(err, verifyEmail) {
    if(err) { return handleError(res, err); }
    return res.json(201, verifyEmail);
  });
};

// Updates an existing verifyEmail in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  VerifyEmail.findById(req.params.id, function (err, verifyEmail) {
    if (err) { return handleError(res, err); }
    if(!verifyEmail) { return res.send(404); }
    var updated = _.merge(verifyEmail, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, verifyEmail);
    });
  });
};

// Deletes a verifyEmail from the DB.
exports.destroy = function(req, res) {
  VerifyEmail.findById(req.params.id, function (err, verifyEmail) {
    if(err) { return handleError(res, err); }
    if(!verifyEmail) { return res.send(404); }
    verifyEmail.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
