'use strict';

var express = require('express');
var controller = require('./postcode.controller');

var router = express.Router();

router.post('/', controller.sendAddress);

module.exports = router;