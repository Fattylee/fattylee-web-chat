const express = require('express');
const path = require('path');
const socket = require('socket.io');
const moment = require('moment');

const app = express();
const myPath = path.join(__dirname);
console.log(myPath);
app.use('/', express.static(myPath));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log('server running on port', port);
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('a new client is connected', socket.id);

socket.on('newMessage', (payload) => {
  
  const newPayload = { ...payload, timestamp: moment().format('h-mm-ss a'), };
  socket.join(newPayload.room.toLowerCase());
  io.to(newPayload.room.toLowerCase()).emit('newMessage', newPayload);
});

socket.on('leave', (payload) => {
  socket.leave(payload.room.toLowerCase());
  socket.to(payload.room).broadcast.emit('leave', payload);
  socket.emit('feedback', 'You left ' + payload.room + ' room.' );
});


});