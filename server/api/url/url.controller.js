'use strict';

var _ = require('lodash');
var Url = require('./url.model');

// Get list of urls
exports.index = function(req, res) {
  Url.find(function (err, urls) {
    if(err) { return handleError(res, err); }
    return res.json(200, urls);
  });
};

// Get a single url
exports.show = function(req, res) {
  Url.findById(req.params.id, function (err, url) {
    if(err) { return handleError(res, err); }
    if(!url) { return res.send(404); }
    return res.json(url);
  });
};

// Creates a new url in the DB.
exports.create = function(req, res) {
  Url.create(req.body, function(err, url) {
    if(err) { return handleError(res, err); }
    return res.json(201, url);
  });
};

// Updates an existing url in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Url.findById(req.params.id, function (err, url) {
    if (err) { return handleError(res, err); }
    if(!url) { return res.send(404); }
    var updated = _.merge(url, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, url);
    });
  });
};

// Deletes a url from the DB.
exports.destroy = function(req, res) {
  Url.findById(req.params.id, function (err, url) {
    if(err) { return handleError(res, err); }
    if(!url) { return res.send(404); }
    url.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}