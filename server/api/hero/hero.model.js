'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HeroSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Hero', HeroSchema);
