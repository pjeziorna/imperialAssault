'use strict';

var _ = require('lodash');
var Hero = require('./hero.model');

// Get list of heros
exports.index = function(req, res) {
  Hero.find(function (err, heros) {
    if(err) { return handleError(res, err); }
    return res.json(200, heros);
  });
};

// Get a single hero
exports.show = function(req, res) {
  Hero.findById(req.params.id, function (err, hero) {
    if(err) { return handleError(res, err); }
    if(!hero) { return res.send(404); }
    return res.json(hero);
  });
};

// Creates a new hero in the DB.
exports.create = function(req, res) {
  Hero.create(req.body, function(err, hero) {
    if(err) { return handleError(res, err); }
    return res.json(201, hero);
  });
};

// Updates an existing hero in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Hero.findById(req.params.id, function (err, hero) {
    if (err) { return handleError(res, err); }
    if(!hero) { return res.send(404); }
    var updated = _.merge(hero, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, hero);
    });
  });
};

// Deletes a hero from the DB.
exports.destroy = function(req, res) {
  Hero.findById(req.params.id, function (err, hero) {
    if(err) { return handleError(res, err); }
    if(!hero) { return res.send(404); }
    hero.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}