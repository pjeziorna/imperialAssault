/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Hero = require('../api/hero/hero.model');
var Mission = require('../api/mission/mission.model');

var MissionsMock = require('./dbInit/missionsMock');
var HerosMock = require('./dbInit/herosMock');
var UsersMock = require('./dbInit/usersMock');

User.find({}).remove(function() {
  User.create(UsersMock, function() {
      console.log('finished populating users');
    }
  );
});

Hero.count({}, function(err, count){
  if(count === HerosMock.length) return true;
  if(count > 0 && count < HerosMock.length){
    Hero.find({}).remove(function(){
      Hero.create(HerosMock, function(){
        console.log('finished populating heros');
      })
    })
  }else{
    Hero.create(HerosMock, function(){
      console.log('finished populating heros');
    });
  }
});

Mission.count({}, function(err, count){
  if(count === MissionsMock.length) return true;
  if(count > 0 && count < MissionsMock.length){
    Mission.find({}).remove(function(){
      Mission.create(MissionsMock, function(){
        console.log('finished populating missions');
      });
    });
  }else{
    Mission.create(MissionsMock, function(){
      console.log('finished populating missions');
    });
  }
});

