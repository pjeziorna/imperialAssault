/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    _id: 'test',
    provider: 'local',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@test.com',
    password: 'test'
  }, {
    _id: 'admin',
    provider: 'local',
    role: 'admin',
    firstName: 'Admin',
    lastName: '',
    email: 'admin@admin.com',
    password: 'admin'
  }, {
    _id: 'jeap',
    provider: 'local',
    role: 'admin',
    firstName: 'Paulina',
    lastName: 'Jeziorna',
    email: 'jeziorna@gmail.com',
    password: '123'
  }, function() {
      console.log('finished populating users');
    }
  );
});
