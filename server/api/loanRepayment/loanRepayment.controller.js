'use strict';

var _ = require('lodash');
var LoanRepayment = require('./loanRepayment.model');

// Get list of loanRepayments
exports.index = function(req, res) {
  LoanRepayment.find(function (err, loanRepayments) {
    if(err) { return handleError(res, err); }
    return res.json(200, loanRepayments);
  });
};

// Get a single loanRepayment
exports.show = function(req, res) {
  LoanRepayment.findById(req.params.id, function (err, loanRepayment) {
    if(err) { return handleError(res, err); }
    if(!loanRepayment) { return res.send(404); }
    return res.json(loanRepayment);
  });
};

// Creates a new loanRepayment in the DB.
exports.create = function(req, res) {
 console.log(req.body.credit + " " + req.body.term);




  var CalcRepay = function() {
      var m= 12;
    var p=parseInt(req.body.credit);
    var i=0;
    var f=0;
    var n=parseInt(req.body.term);
    var r=79.9;

    //calculate the 'x-factor' ...
    var x=1/Math.pow(1+r/100,1/m)
    //calculate the repayment ...
    var a=((p-i-f*Math.pow(x,n))*(x-1))/(Math.pow(x,n+1)-x)
   return TwoDP(a);
  }

  function TwoDP(num) {
    if (isNaN(num)) num="0"
    num="$"+Math.round(100*num)/100;
    if (num.indexOf(".")==-1) num+=".00";
    if (num.indexOf(".")==num.length-2) num+="0";
    return num.substring(1,num.length);
  }

  function OneDP(num) {
    if (isNaN(num)) num="0"
    num="$"+Math.round(10*num)/10;
    if (num.indexOf(".")==-1) num+=".0";
    return num.substring(1,num.length);
  }

  res.json(201,{value:CalcRepay()});

};

// Updates an existing loanRepayment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  LoanRepayment.findById(req.params.id, function (err, loanRepayment) {
    if (err) { return handleError(res, err); }
    if(!loanRepayment) { return res.send(404); }
    var updated = _.merge(loanRepayment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, loanRepayment);
    });
  });
};

// Deletes a loanRepayment from the DB.
exports.destroy = function(req, res) {
  LoanRepayment.findById(req.params.id, function (err, loanRepayment) {
    if(err) { return handleError(res, err); }
    if(!loanRepayment) { return res.send(404); }
    loanRepayment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
