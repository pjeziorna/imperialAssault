'use strict';

var _ = require('lodash');
var Campaign = require('./campaign.model');

// Get list of campaigns
exports.mineCampaigns = function(req, res) {
  Campaign.find({ $or: [{
    'owner': req.user._id
  }, {
    'imperialPlayer._id': req.user._id
  },{
    'rebelPlayers._id': req.user._id
  }]}, function (err, campaigns) {
    if(err) { return handleError(res, err); }
    return res.json(200, campaigns);
  });
};

// Get a single campaign
exports.show = function(req, res) {
  var ObjectId = require('mongoose').Types.ObjectId
  Campaign.findById(new ObjectId(req.params.id), function (err, campaign) {
    if(err) { return handleError(res, err); }
    if(!campaign) { return res.send(404); }
    return res.json(campaign);
  });
};

// Creates a new campaign in the DB.
exports.create = function(req, res) {
  if (req.body.startDate === undefined || req.body.startDate === null) {
    req.body.startDate = new Date();
  }
  Campaign.create(req.body, function(err, campaign) {
    if(err) { return handleError(res, err); }
    return res.json(201, campaign);
  });
};

// Updates an existing campaign in the DB.
exports.update = function(req, res) {
  //console.log(req.body);
  if(req.body._id) { delete req.body._id; }
  Campaign.findById(req.params.id, function (err, campaign) {
    //console.log('campaign update ', campaign);
    if (err) { return handleError(res, err); }
    if(_.intersection(req.body.tracks, campaign.tracks).length !== req.body.tracks.length){
      // update timeSpent according to this in tracks
      //campaign.timeSpent = updateTimeSpent(req.body.tracks);
      campaign.markModified('timeSpent');
      campaign.markModified('tracks');
    }
    if(_.intersection(req.body.rebelPlayers, campaign.rebelPlayers).length !== req.body.rebelPlayers.length){
      campaign.markModified('rebelPlayers');
    }

    if(!campaign) { return res.send(404); }
    var updated = _.merge(campaign, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      //console.log('campaign updated ', campaign);
      return res.json(200, campaign);
    });
  });
};

// Deletes a campaign from the DB.
exports.destroy = function(req, res) {
  Campaign.findById(req.params.id, function (err, campaign) {
    if(err) { return handleError(res, err); }
    if(!campaign) { return res.send(404); }
    campaign.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
