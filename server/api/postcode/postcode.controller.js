'use strict';

var _ = require('lodash');
var Postcode = require('./postcode.model');

//mask api key with process.env when deploying to heroku
var idealPostcodes = require('ideal-postcodes')('ak_ibao0p7kwvfjlC2LQ6eCJxH3BRmF6'); 

// Get list of postcodes
exports.sendAddress = function(req, res) {
  
  var postcode = req.body.postcode
 idealPostcodes.lookupPostcode(postcode, function (error, addresses) {
    if (error) {
        res.send(500, error);   
    } 
    res.json(200, addresses);     
});

};

