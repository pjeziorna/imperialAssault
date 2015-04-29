'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TrackSchema = new Schema({
  mission: {
    _id: String,
    title: String
  },
  campaign_id: { type: Schema.Types.ObjectId, index: true},
  imperialStats: {
    influence: Number
  },
  rebelStats: {
    credits: Number,
    allys: Array,
    users: Array
  },
  availableSideMissions: Array,
  timeSpent: {
    hours: Number,
    minutes: Number
  },
  winner: String
});

module.exports = mongoose.model('Track', TrackSchema);
