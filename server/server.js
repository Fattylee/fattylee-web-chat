const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use('/', express.static(path.join(__dirname, '..', 'public')));


io.on('connection', (socket) => {
  console.log('new user conected!');
  
  socket.on('disconnect', () => {
    console.log('client disconected');
  });
  
  socket.emit('newEmail', {
    from: 'mapopo',
    text: 'hi, fattylee',
    createdAt: Date.now()
  });
  
  socket.on('createEmail', (payload) => {
    payload.createdAt = 123;
    console.log('send email to:', payload);
  });
  
  
  
  socket.on('createMessage', (payload) => {
    payload.createdAt = Date.now();
    console.log('dispatching a new message');
    io.emit('newMessage', payload);/* {
    from: 'haleemath',
    text: 'hi, everyone hope youre catching fun?!',
    createdAt: Date.now()
  });*/
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('Server running on port', port);
});