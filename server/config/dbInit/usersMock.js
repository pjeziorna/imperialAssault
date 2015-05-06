'use strict';
var mongoose = require('mongoose');
var mock = [{
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
}];

module.exports = mock;
