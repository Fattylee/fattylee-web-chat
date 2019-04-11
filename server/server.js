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
  
  socket.emit('newMessage', {from: 'admin', text: 'welcome to the chat room', createdAt: new Date().getTime()});
  socket.broadcast.emit('newMessage', {from: 'admin', 'text': 'a new user just joined the chat room', createdAt: Date.now()});
  socket.on('createMessage', (payload) => {
    payload.createdAt = Date.now();
    
    console.log('dispatching a new message');
    //io.emit('newMessage', payload);
    socket.broadcast.emit('newMessage', payload);
  });
  
  
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('Server running on port', port);
});