'use strict';

var express = require('express');
var controller = require('./track.controller');

var router = express.Router();

//router.get('/:campaign_id', controller.index);
router.get('/:campaign_id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
