'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MissionSchema = new Schema({
  _id: String, // short name - enum like MISSION_1
  type: String,
  title: String,
  rebelVictoryBonus: {
    credits: {type: Number, default: 0},
    exp: {type: Number, default: 0},
    other: String
  },
  empireVictoryBonus: {
    influence: {type: Number, default: 0},
    exp: {type: Number, default: 0},
    other: String
  },
  additionalRewards: {
    exp: {type: Number, default: 0},
    credits: {type: Number, default: 0},
    influence: {type: Number, default: 0},
    other: String
  },
  deckType: String
});

module.exports = mongoose.model('Mission', MissionSchema);
