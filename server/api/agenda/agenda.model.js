'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AgendaSchema = new Schema({
  _id: String,
  name: String,
  setName: String,
  cost: Number
});

module.exports = mongoose.model('Agenda', AgendaSchema);
