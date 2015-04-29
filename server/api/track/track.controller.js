'use strict';

var _ = require('lodash');
var Track = require('./track.model');


// Get list of tracks belogns to campaign
exports.show = function(req, res) {
  var ObjectId = require('mongoose').Types.ObjectId;
  console.log('tracks find by campaign id: ',new ObjectId(req.params.campaign_id));
  Track.find({campaign_id: new ObjectId(req.params.campaign_id)}, function (err, tracks) {
    if(err) { return handleError(res, err); }
    if(!tracks) { return res.send(404); }
    return res.json(tracks);
  });
};

// Creates a new track in the DB.
exports.create = function(req, res) {
  console.log('track to create', req.body);
  Track.create(req.body, function(err, track) {
    if(err) { return handleError(res, err); }
    return res.json(201, track);
  });
};

// Updates an existing track in the DB.
exports.update = function(req, res) {
  console.log('track to update', req.body);
  if(req.body._id) { delete req.body._id; }
  Track.findById(req.params.id, function (err, track) {
    if (err) { return handleError(res, err); }
    if(!track) { return res.send(404); }
    var updated = _.merge(track, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, track);
    });
  });
};

// Deletes a track from the DB.
exports.destroy = function(req, res) {
  Track.findById(req.params.id, function (err, track) {
    if(err) { return handleError(res, err); }
    if(!track) { return res.send(404); }
    track.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
