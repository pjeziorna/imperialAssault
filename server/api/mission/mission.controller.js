'use strict';

var _ = require('lodash');
var Mission = require('./mission.model');

// Get list of missions
exports.index = function(req, res) {
  Mission.find(function (err, missions) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(missions);
  });
};

// Get a single mission
exports.show = function(req, res) {
  Mission.findById(req.params.id, function (err, mission) {
    if(err) { return handleError(res, err); }
    if(!mission) { return res.send(404); }
    return res.json(mission);
  });
};

// Get a single mission by name
exports.getByName = function(req, res) {
  Mission.find({name: req.params.name}, function (err, missions) {
    if(err) { return handleError(res, err); }
    if(!missions) { return res.send(404); }
    return res.json(missions);
  });
};

// Creates a new mission in the DB.
exports.create = function(req, res) {
  Mission.create(req.body, function(err, mission) {
    if(err) { return handleError(res, err); }
    return res.json(201, mission);
  });
};

// Updates an existing mission in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mission.findById(req.params.id, function (err, mission) {
    if (err) { return handleError(res, err); }
    if(!mission) { return res.send(404); }
    var updated = _.merge(mission, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mission);
    });
  });
};

// Deletes a mission from the DB.
exports.destroy = function(req, res) {
  Mission.findById(req.params.id, function (err, mission) {
    if(err) { return handleError(res, err); }
    if(!mission) { return res.send(404); }
    mission.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
