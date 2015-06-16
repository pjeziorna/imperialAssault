'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CampaignSchema = new Schema({
  owner: { type: String, index: true},
  name: String,
  imperialPlayer: {
    _id: { type: String, index: true },
    firstName: String,
    lastName: String
  },
  rebelPlayers: Array,
  tracks: { type: Array, index: true },
  winner: String,
  timeSpent: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 }
  },
  startDate: {type: Date, default: new Date()}
});


module.exports = mongoose.model('Campaign', CampaignSchema);
