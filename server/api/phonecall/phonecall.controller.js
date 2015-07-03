'use strict';

var _ = require('lodash');
var Phonecall = require('./phonecall.model');
var sendgrid = require('sendgrid')('driverloansceo','Authme1290');
var path = require('path');
var templatesDir  = path.join(__dirname, '..', '..', 'templates');
var emailTemplates = require('email-templates');


// Get list of phonecalls
exports.index = function(req, res) {
  Phonecall.find(function (err, phonecalls) {
    if(err) { return handleError(res, err); }
    return res.json(200, phonecalls);
  });
};

// Get a single phonecall
exports.show = function(req, res) {
  Phonecall.findById(req.params.id, function (err, phonecall) {
    if(err) { return handleError(res, err); }
    if(!phonecall) { return res.send(404); }
    return res.json(phonecall);
  });
};

// Creates a new phonecall in the DB.
exports.create = function(req, res) {
  Phonecall.create(req.body, function(err, phonecall) {
    if(err) { return handleError(res, err); }

    emailTemplates(templatesDir, function(err, template) {

      if (err) {
        console.log(err);
      } else {

      var locals = {
        time: phonecall.callTime,
        fName: req.body.fName
      };

        // Send a single email
        template('phonecall-email', locals, function(err, html, text) {
          if (err) {
            console.log(err);
          } else {

            sendgrid.send({
              to:       req.body.email,
              from:     'hello@driverloan.co.uk',
              fromname: 'Driver Loan',
              subject:  'Your Loan has been approved',
              html:     html
            }, function(err, json) {
              if (err) { return console.error(err); }
              console.log(json);
            });

          }
        });
      }
    });


    return res.json(201, phonecall);
  });
};

// Updates an existing phonecall in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Phonecall.findById(req.params.id, function (err, phonecall) {
    if (err) { return handleError(res, err); }
    if(!phonecall) { return res.send(404); }
    var updated = _.merge(phonecall, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, phonecall);
    });
  });
};

// Deletes a phonecall from the DB.
exports.destroy = function(req, res) {
  Phonecall.findById(req.params.id, function (err, phonecall) {
    if(err) { return handleError(res, err); }
    if(!phonecall) { return res.send(404); }
    phonecall.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
