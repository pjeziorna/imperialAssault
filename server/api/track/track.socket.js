/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Track = require('./track.model');

exports.register = function(socket) {
  Track.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Track.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('track:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('track:remove', doc);
}